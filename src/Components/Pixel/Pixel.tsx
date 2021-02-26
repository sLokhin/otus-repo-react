import React, { Component } from "react";
import { PixelButton } from "./components/PixelButton/PixelButton";
import styled from "@emotion/styled";

interface IPixelProps {
  filled: boolean;
  x: number;
  y: number;
  onClick: (coordX: number, coordY: number, newFlag: boolean) => void;
}

const PixelDiv = styled.div(() => ({
  display: "inline-block",
  margin: "2px",
}));

export class Pixel extends Component<IPixelProps, Record<string, unknown>> {
  onClickHandler(): void {
    const { filled, x, y, onClick } = this.props;
    onClick(x, y, !filled);
  }

  render(): React.ReactNode {
    const { filled, x, y } = this.props;
    return (
      <PixelDiv className="pixel-wrapper">
        <PixelButton
          onClick={() => this.onClickHandler()}
          filled={filled}
        ></PixelButton>
      </PixelDiv>
    );
  }
}
