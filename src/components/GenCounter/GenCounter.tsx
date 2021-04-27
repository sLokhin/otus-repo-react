import React, { FC } from "react";
import styled from "@emotion/styled";

const GenCounterWrapper = styled.div`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  display: flex;
  margin: auto;
  justify-content: space-around;
  align-items: center;
  width: 400px;
`;

interface GenCounterProps {
  counter: number;
}

export const GenCounter: FC<GenCounterProps> = (props: GenCounterProps) => {
  const { counter } = props;
  return (
    <GenCounterWrapper>
      <h2>Generation : {counter}</h2>
    </GenCounterWrapper>
  );
};
