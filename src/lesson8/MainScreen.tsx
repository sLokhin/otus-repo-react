import React, { Component } from "react";
import styled from "@emotion/styled";
import { ButtonWrapper } from "./ButtonWrapper";
import { QuestionWindow } from "./QuestionWindow";
import { getJSON } from "./utils";

const Container = styled.div`
  text-align: ${"center"};
`;

interface IMainScreenState {
  questionDoneCounter: number;
  questionText: string;
  questionEmail: string;
  jsonReceived: boolean;
}

export class MainScreen extends React.Component<{}, IMainScreenState> {
  _isMounted: boolean;
  _defaultLoadingMessage: string;

  constructor({}) {
    super({});
    this._isMounted = false;
    this._defaultLoadingMessage = "Loading...";
    this.state = {
      questionDoneCounter: 0,
      questionEmail: this._defaultLoadingMessage,
      questionText: this._defaultLoadingMessage,
      jsonReceived: false,
    };
    this.increment = this.increment.bind(this);
    this.getNewQuestion = this.getNewQuestion.bind(this);
  }

  private increment() {
    this.setState((state) => ({
      questionDoneCounter: state.questionDoneCounter + 1,
      questionEmail: this._defaultLoadingMessage,
      questionText: this._defaultLoadingMessage,
      jsonReceived: false,
    }));
  }

  private getNewQuestion() {
    getJSON().then((json) => {
      if (this._isMounted) {
        console.log("FROM JSON ", json.email);

        this.setState({
          questionEmail: json.email,
          questionText: json.body,
          jsonReceived: true,
        });
      }
    });
  }

  componentDidMount() {
    this._isMounted = true;
    this.getNewQuestion();
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
      </Container>
    );
  }
}
