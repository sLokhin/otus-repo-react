import React, { Component } from "react";
import { PixelButton } from "./components/PixelButton/PixelButton";

interface IPixelProps {
  filled?: string;
  x?: number;
  y?: number;
  onClick?: (coordX: number, coordY: number, newFlag: boolean) => void;
}

interface IPixelState {
  isClicked: boolean;
}

export class Pixel extends Component<IPixelProps, IPixelState> {
  state = {
    isClicked: false,
  };

  onClickHandler() {
    const { x = 0, y = 0, onClick = () => null } = this.props;
    this.setState({ isClicked: true });
    onClick(x, y, true);
  }

  render() {
    const { isClicked } = this.state;
    const { filled = "0", x = 0, y = 0 } = this.props;
    return (
      <div
        className="pixel-wrapper"
        style={{ display: "inline-block", margin: "2px" }}
      >
        <PixelButton onClick={() => this.onClickHandler()} filled={filled}>
          {isClicked ? `Coords: ${x}-${y}` : "Not clicked yet"}
        </PixelButton>
      </div>
    );
  }
}
