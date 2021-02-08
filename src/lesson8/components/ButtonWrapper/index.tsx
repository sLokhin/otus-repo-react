import React, { FC } from "react";
import styled from "@emotion/styled";
import { AnswerButton } from "../AnswerButton";

interface IButtonWrapperProps {
  onClick: () => void;
  isDisabled: boolean;
}

const Div = styled.div`
  textalign: ${"center"};
`;

export class ButtonWrapper extends React.Component<IButtonWrapperProps> {
  shouldComponentUpdate(nextProps: IButtonWrapperProps): boolean {
    const flag = this.props.isDisabled !== nextProps.isDisabled;
    return flag;
  }

  render() {
    return (
      <Div>
        <AnswerButton
          isDisabled={this.props.isDisabled}
          onClick={this.props.onClick}
          buttonText={"Yes"}
        ></AnswerButton>
        <AnswerButton
          isDisabled={this.props.isDisabled}
          onClick={this.props.onClick}
          buttonText={"No"}
        ></AnswerButton>
      </Div>
    );
  }
}
