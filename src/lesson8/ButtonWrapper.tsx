import React, { FC } from "react";
import styled from "@emotion/styled";
import { AnswerButton } from "./AnswerButton";

interface IButtonWrapperProps {
  onClick: () => void;
  isDisabled: boolean;
}

const Div = styled.div`
  textalign: ${"center"};
`;

export class ButtonWrapper extends React.Component<IButtonWrapperProps, {}> {
  constructor(props: IButtonWrapperProps) {
    super(props);
    this.state = {};
  }

  shouldComponentUpdate(nextProps: IButtonWrapperProps, {}) {
    const flag = this.props.isDisabled !== nextProps.isDisabled;
    console.log("FLAG   ", flag);
    return flag;
  }

  render() {
    return (
      <Div>
        <AnswerButton
          isDisabled={this.props.isDisabled}
          onClick={this.props.onClick}
        >
          Yes
        </AnswerButton>
        <AnswerButton
          isDisabled={this.props.isDisabled}
          onClick={this.props.onClick}
        >
          No
        </AnswerButton>
      </Div>
    );
  }
}
