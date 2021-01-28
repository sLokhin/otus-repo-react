import React, { Component } from "react";
import { PixelButton } from "../PixelButton/PixelButton";

interface IPixelProps {
  filled?: string;
  x?: number;
  y?: number;
  onClick: (coordX: number, coordY: number, newFlag: boolean) => void;
}

interface IPixelState {
  isClicked: boolean;
}

export class Pixel extends Component<IPixelProps, IPixelState> {
  state = {
    isClicked: false,
  };

  render() {
    const { isClicked } = this.state;
    const { filled = "0", x = 0, y = 0, onClick = () => null } = this.props;

    const clickHandler = () => {
      this.setState({ isClicked: true });
      onClick(x, y, true)
    }

    return (
      <div
        className="pixel-wrapper"
        style={{ display: "inline-block", margin: "2px" }}
      >
        <PixelButton onClick={clickHandler} filled={filled}>
          {isClicked ? `Coords: ${x}-${y}` : "Not clicked yet"}
        </PixelButton>
      </div>
    );
  }
}

export const getPixel = (props: IPixelProps) => <Pixel {...props} />;
