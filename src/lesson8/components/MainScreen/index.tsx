import React, { Component } from "react";
import styled from "@emotion/styled";
import { ButtonWrapper } from "../ButtonWrapper";
import { QuestionWindow } from "../QuestionWindow";
import { Hint } from "../Hint";
import { getJSON } from "../../Utils/utils";

const H1 = styled.h1`
  display: block;
`;

const Container = styled.div`
  position: relative;
  text-align: center;
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

  constructor(props: Record<string, unknown>) {
    super(props);
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
    this.testClickFunction = this.testClickFunction.bind(this);
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

  private testClickFunction() {
    console.log("Button Clicked !!!");
  }

  componentDidMount() {
    this._isMounted = true;
    this.getNewQuestion();
    const buttons = document.getElementsByClassName("answer-button");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", this.testClickFunction);
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
    this.clearTimeout();
    const buttons = document.getElementsByClassName("answer-button");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].removeEventListener("click", this.testClickFunction);
    }
  }

  componentDidUpdate({}, prevState: IMainScreenState) {
    if (prevState.questionDoneCounter !== this.state.questionDoneCounter) {
      this.getNewQuestion();
    }
  }

  render() {
    if (this.state.questionDoneCounter === 5) {
      throw new Error("I'm sorry... too many question for today");
    }
    return (
      <Container>
        <H1>Yes / No question</H1>
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
