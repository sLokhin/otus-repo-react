import React, { FC } from "react";
import styled from "@emotion/styled";

interface IQuestionWindowProps {
  email?: string;
  question?: string;
}

interface ISpanProps {
  isAskingSpan: boolean;
}

const Div = styled.div`
  display: ${"inline-flex"};
  flex-direction: ${"column"};
  justify-content: ${"center"};
  margin: ${"0px 0px 5px 0px"};
  width: ${"300px"};
  height: ${"200px"};
  font-size: ${"20px"};
  border: ${"2px solid grey"};
  background-color: ${"gainsboro"};
`;

const Span = styled.span<ISpanProps>((props) => ({
  margin: props.isAskingSpan === true ? "7px 0 0 0" : "0",
}));

export const QuestionWindow: FC<IQuestionWindowProps> = ({
  email = "default@email.com",
  question = "default question",
}) => {
  return (
    <Div>
      <Span isAskingSpan={false}>Question from: </Span>
      <Span isAskingSpan={false}>{email}</Span>
      <Span isAskingSpan={true}>Is asking: </Span>
      <Span isAskingSpan={false}>{question}</Span>
    </Div>
  );
};
