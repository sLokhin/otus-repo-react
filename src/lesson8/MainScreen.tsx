import React, { Component } from "react";
import styled from "@emotion/styled";
import { AnswerButton } from "./AnswerButton";
import { QuestionWindow } from "./QuestionWindow";
import { getJSON } from "./utils";

const Container = styled.div`
  text-align: ${"center"};
`;

const ButtonWrapper = styled.div`
  text-align: ${"center"};
`;

interface IMainScreenState {
  questionDoneCounter: number;
  questionText: string;
  questionEmail: string;
}

export class MainScreen extends React.Component<{}, IMainScreenState> {
  _isMounted: boolean;

  constructor({}) {
    super({});
    this.state = {
      questionDoneCounter: 0,
      questionEmail: "Loading...",
      questionText: "Loading...",
    };
    this._isMounted = false;
    this.increment = this.increment.bind(this);
    this.getNewQuestion = this.getNewQuestion.bind(this);
  }

  private increment() {
    this.setState((state) => ({
      questionDoneCounter: state.questionDoneCounter + 1,
    }));
  }

  private getNewQuestion() {
    getJSON().then((json) => {
      if (this._isMounted) {
        console.log("FROM JSON ", json.email);
        this.setState({
          questionEmail: json.email,
          questionText: json.body,
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
      "new state ----- ",
      this.state.questionDoneCounter,
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
        <ButtonWrapper>
          <AnswerButton onClick={this.increment}>Yes</AnswerButton>
          <AnswerButton onClick={this.increment}>No</AnswerButton>
        </ButtonWrapper>
      </Container>
    );
  }
}
