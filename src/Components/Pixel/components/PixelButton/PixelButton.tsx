import React, { FC } from "react";
import styled from '@emotion/styled'

interface IPixelButtonProps {
  filled?: string;
  onClick: () => void;
  children?: string;
}

const Button = styled.button<IPixelButtonProps>((props) => ({
  width: "120px",
  height: "50px",
  backgroundColor: props.filled === "1" ? "grey" : "gainsboro",
}))

export const PixelButton: FC<IPixelButtonProps> = ({
  filled = "0",
  onClick,
  children = "No description",
}) => {
  return (
    <Button
      className="pixel"
      onClick={onClick}
      filled={filled}
    >
      {children}
    </Button>
  );
};
