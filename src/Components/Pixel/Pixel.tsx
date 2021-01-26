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
  constructor(props: IPixelProps) {
    super(props);
    this.state = {
      isClicked: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { isClicked } = this.state;
    this.setState({ isClicked: true });
  }

  componentDidMount() {
    console.log('Component "Pixel": componentDidMount');
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
