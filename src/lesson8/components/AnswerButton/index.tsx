import React, { FC } from "react";
import styled from "@emotion/styled";

interface IAnswerButtonProps {
  onClick: () => void;
  isDisabled: boolean;
  buttonText?: string;
}

const Button = styled.button<IAnswerButtonProps>((props) => ({
  margin: "0 10px",
  width: "120px",
  height: "50px",
  fontSize: "24px",
  color: props.isDisabled ? "grey" : "",
  opacity: props.isDisabled ? 0.7 : 1,
  pointerEvents: props.isDisabled ? "none" : "auto",
  userSelect: "none",
}));

export const AnswerButton: FC<IAnswerButtonProps> = ({
  onClick,
  isDisabled,
  buttonText = "Default",
}) => {
  return (
    <Button isDisabled={isDisabled} onClick={onClick}>
      {buttonText}
    </Button>
  );
};
