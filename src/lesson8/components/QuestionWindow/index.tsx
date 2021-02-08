import React, { FC } from "react";
import styled from "@emotion/styled";

interface IQuestionWindowProps {
  email: string;
  question: string;
}

interface ISpanProps {
  isHeaderSpan: boolean;
  isAskingSpan: boolean;
}

const Div = styled.div`
  display: ${"inline-flex"};
  flex-direction: ${"column"};
  justify-content: ${"center"};
  padding: ${"0px 10px"};
  margin: ${"0px 0px 5px 0px"};
  width: ${"350px"};
  height: ${"250px"};
  font-size: ${"20px"};
  border: ${"2px solid grey"};
  background-color: ${"gainsboro"};
  text-align: ${"center"};
`;

const Span = styled.span((props: ISpanProps) => ({
  margin: props.isAskingSpan === true ? "7px 0 0 0" : "0",
  fontWeight: props.isHeaderSpan === true ? "bold" : "normal",
}));

export const QuestionWindow: FC<IQuestionWindowProps> = ({
  email,
  question,
}) => {
  return (
    <Div>
      <Span isHeaderSpan={true} isAskingSpan={false}>
        Question from:{" "}
      </Span>
      <Span isHeaderSpan={false} isAskingSpan={false}>
        {email}
      </Span>
      <Span isHeaderSpan={true} isAskingSpan={true}>
        Is asking:{" "}
      </Span>
      <Span isHeaderSpan={false} isAskingSpan={false}>
        {question}
      </Span>
    </Div>
  );
};
