import React, { FC } from "react";
import styled from "@emotion/styled";

const Button = styled.button<ButtonProps>((props: ButtonProps) => ({
  width: "20px",
  height: "20px",
  backgroundColor: props.filled ? "grey" : "gainsboro",
}));

const PixelDiv = styled.div`
  display: inline-block;
  margin: 2px;
`;

type PixelProps = {
  filled: boolean;
  x: number;
  y: number;
  onClick?: (coordX: number, coordY: number, newFlag: boolean) => void;
};

type ButtonProps = Pick<PixelProps, "filled" | "onClick">;

export const Pixel: FC<PixelProps> = (props: PixelProps) => {
  const { filled, x, y, onClick = () => null } = props;
  const onClickHandler = (): void => {
    onClick(x, y, !filled);
  };

  return (
    <PixelDiv className="pixel-wrapper">
      <Button
        className="pixel"
        onClick={onClickHandler}
        filled={filled}
      ></Button>
    </PixelDiv>
  );
};
