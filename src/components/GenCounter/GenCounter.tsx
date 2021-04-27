import React, { FC } from "react";
import styled from "@emotion/styled";

const GenCounterWrapper = styled.div`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  display: flex;
  margin: auto;
  padding-bottom: 20px;
  justify-content: space-around;
  align-items: center;
  color: black;
`;

export const TextWrapper = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

interface GenCounterProps {
  counter: number;
}

export const GenCounter: FC<GenCounterProps> = (props: GenCounterProps) => {
  const { counter } = props;
  return (
    <GenCounterWrapper>
      <TextWrapper>Generation : {counter}</TextWrapper>
    </GenCounterWrapper>
  );
};
