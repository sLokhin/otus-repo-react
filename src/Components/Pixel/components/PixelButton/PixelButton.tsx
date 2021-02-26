import React, { FC } from "react";
import styled from "@emotion/styled";

interface IPixelButtonProps {
  filled: boolean;
  onClick: () => void;
}

const Button = styled.button<IPixelButtonProps>((props) => ({
  width: "20px",
  height: "20px",
  backgroundColor: props.filled ? "grey" : "gainsboro",
}));

export const PixelButton: FC<IPixelButtonProps> = ({ filled, onClick }) => {
  return <Button className="pixel" onClick={onClick} filled={filled}></Button>;
};
