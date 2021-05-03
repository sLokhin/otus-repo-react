import React, { FC } from "react";
import styled from "@emotion/styled";

const CongratWrapper = styled.div`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  display: flex;
  margin: auto;
  padding-bottom: 20px;
  justify-content: space-around;
  align-items: center;
`;

const CongratText = styled.div<CongratProps>((props: CongratProps) => ({
  fontSize: "24px",
  fontWeight: "bold",
  color: props.success ? "#1d9027" : "#ff0000",
}));

interface CongratProps {
  success: boolean;
}

export const Congrat: FC<CongratProps> = (props: CongratProps) => {
  const { success } = props;
  return (
    <CongratWrapper>
      <CongratText success={success}>
        {success ? "Congratulations !!! You Win !!!" : "Oh No !!! You Lost !!!"}
      </CongratText>
    </CongratWrapper>
  );
};
