import React, { FC } from "react";
import styled from "@emotion/styled";

interface IAnswerButtonProps {
  onClick: () => void;
  children?: string;
}

const Button = styled.button<IAnswerButtonProps>`
  margin: ${"0 10px"};
  width: ${"120px"};
  height: ${"50px"};
  font-size: ${"24px"};
`;

export const AnswerButton: FC<IAnswerButtonProps> = ({
  onClick,
  children = "Default",
}) => {
  return <Button onClick={onClick}>{children}</Button>;
};
