import React, { Component } from "react";
import styled from "@emotion/styled";
import { ButtonWrapper } from "./ButtonWrapper";
import { QuestionWindow } from "./QuestionWindow";
import { Hint } from "./Hint";
import { getJSON } from "./utils";

const Container = styled.div`
  position: ${"relative"};
  text-align: ${"center"};
`;

interface IMainScreenState {
  questionDoneCounter: number;
  questionText: string;
  questionEmail: string;
  jsonReceived: boolean;
  showHint: boolean;
}

export class MainScreen extends React.Component<{}, IMainScreenState> {
  _isMounted: boolean;
  _defaultLoadingMessage: string;
  _timeoutID?: NodeJS.Timeout;

  constructor({}) {
    super({});
    this._isMounted = false;
    this._defaultLoadingMessage = "Loading...";
    this.state = {
      questionDoneCounter: 0,
      questionEmail: this._defaultLoadingMessage,
      questionText: this._defaultLoadingMessage,
      jsonReceived: false,
      showHint: false,
    };
    this.increment = this.increment.bind(this);
    this.getNewQuestion = this.getNewQuestion.bind(this);
    this.clearTimeout = this.clearTimeout.bind(this);
  }

  private increment() {
    this.clearTimeout();
    this.setState((state) => ({
      questionDoneCounter: state.questionDoneCounter + 1,
      questionEmail: this._defaultLoadingMessage,
      questionText: this._defaultLoadingMessage,
      jsonReceived: false,
      showHint: false,
    }));
  }

  private getNewQuestion() {
    this.clearTimeout();
    getJSON().then((json) => {
      if (this._isMounted) {
        console.log("FROM JSON ", json.email);

        this._timeoutID = setTimeout(
          () => this.setState({ showHint: true }),
          3000
        );

        this.setState({
          questionEmail: json.email,
          questionText: json.body,
          jsonReceived: true,
          showHint: false,
        });
      }
    });
  }

  private clearTimeout() {
    if (this._timeoutID) {
      clearTimeout(this._timeoutID);
      this._timeoutID = undefined;
    }
  }

  componentDidMount() {
    this._isMounted = true;
    this.getNewQuestion();
  }

  componentWillUnmount() {
    this._isMounted = false;
    this.clearTimeout();
  }

  componentDidUpdate({}, prevState: IMainScreenState) {
    if (prevState.questionDoneCounter !== this.state.questionDoneCounter) {
      this.getNewQuestion();
    }

    console.log(
      "===== new state =====",
      "questionDoneCounter:",
      this.state.questionDoneCounter,
      "questionEmail:",
      this.state.questionEmail
    );
  }

  render() {
    if (this.state.questionDoneCounter === 5) {
      throw new Error("Oh ...., I'm sorry...");
    }
    return (
      <Container>
        <h1>Yes / No question</h1>
        <QuestionWindow
          email={this.state.questionEmail}
          question={this.state.questionText}
        ></QuestionWindow>
        <ButtonWrapper
          isDisabled={!this.state.jsonReceived}
          onClick={this.increment}
        ></ButtonWrapper>
        {this.state.showHint ? <Hint></Hint> : null}
      </Container>
    );
  }
}
