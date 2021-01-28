import React, { Component } from "react";
import { PixelButton } from "../PixelButton/PixelButton";

interface IPixelProps {
  filled?: string;
  x?: number;
  y?: number;
}

interface IPixelState {
  isClicked: boolean;
}

export class Pixel extends Component<IPixelProps, IPixelState> {
  state = {
    isClicked: false,
  };

  onClick = () => {
    const { isClicked } = this.state;
    this.setState({ isClicked: true });
  }

  render() {
    const { isClicked } = this.state;
    const { filled, x, y } = this.props;
    return (
      <div
        className="pixel-wrapper"
        style={{ display: "inline-block", margin: "2px" }}
      >
        <PixelButton onClick={this.onClick} filled={filled}>
          {isClicked ? `Coords: ${x}-${y}` : "Not clicked yet"}
        </PixelButton>
      </div>
    );
  }
}

export const getPixel = (props: IPixelProps) => <Pixel {...props} />;
