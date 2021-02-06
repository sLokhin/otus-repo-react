import React, { FC } from "react";
import styled from "@emotion/styled";

interface IHintProps {
  demoStyles?: boolean;
  message?: string;
}

const Div = styled.div((props) => ({
  position: "absolute",
  display: "inline-block",
  top:
    props.className === "timeout-hint-demo-styles"
      ? "0px"
      : "calc(100% + 30px)",
  left: props.className === "timeout-hint-demo-styles" ? "0px" : "50%",
  transform:
    props.className === "timeout-hint-demo-styles"
      ? "none"
      : "translateX(-50%)",
  padding: "10px 12px",
  fontSize: "24px",
  backgroundColor: "#00c5ee",
  borderRadius: "7px",
}));

export const Hint: FC<IHintProps> = ({
  demoStyles = false,
  message = "Answer faster, please (((",
}) => {
  return (
    <Div className={demoStyles ? "timeout-hint-demo-styles" : "timeout-hint"}>
      {message}
    </Div>
  );
};
