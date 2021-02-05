import React, { Component } from "react";
import styled from "@emotion/styled";
import { AnswerButton } from "./AnswerButton";
const Container = styled.div`
  text-align: ${"center"};
`;

const ButtonWrapper = styled.div`
  text-align: ${"center"};
`;

interface IMainScreenProps {
  questionCounter: number;
  onClick?: (questionCounter: number) => void;
}

interface IMainScreenState {
  questionCounter: number;
}

export class MainScreen extends React.Component<{}, IMainScreenState> {
  constructor({}) {
    super({});
    this.state = {
      questionCounter: 0,
    };
    this.increment = this.increment.bind(this);
  }

  private increment() {
    this.setState((state) => ({ questionCounter: state.questionCounter + 1 }));
  }

  render() {
    return (
      <Container>
        <h1>Yes / No question</h1>
        <ButtonWrapper>
          <AnswerButton onClick={this.increment}>Yes</AnswerButton>
          <AnswerButton onClick={this.increment}>No</AnswerButton>
        </ButtonWrapper>
      </Container>
    );
  }
}
