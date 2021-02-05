import React, { FC } from "react";
import styled from "@emotion/styled";

interface IHintProps {
  message?: string;
}

const Div = styled.div`
  position: ${"absolute"};
  display: ${"inline-block"};
  top: ${"calc(100% + 30px)"};
  left: ${"50%"};
  transform: ${"translateX(-50%)"};
  padding: ${"10px 12px"};
  font-size: ${"24px"};
  background-color: ${"#00c5ee"};
  border-radius: ${"7px"};
`;

export const Hint: FC<IHintProps> = ({
  message = "Answer faster, please (((",
}) => {
  return <Div className={"timeout-hint"}>{message}</Div>;
};
