import React, { Component } from "react";
import { Pixel } from "../Pixel/Pixel";

interface IPixelFieldProps {
  pixelMass: string[][];
}

interface IPixelFieldState {
  pixelClickedStatesMass: boolean[][];
}

export class PixelField extends Component<IPixelFieldProps, IPixelFieldState> {
  state = {
    pixelClickedStatesMass: this.props.pixelMass.map(row => row.map(pixel => false))
  };

  onClick = (coordX: number, coordY: number, newFlag: boolean) => {
    const { pixelClickedStatesMass } = this.state;

    const newClickedStatesMass: boolean[][] = pixelClickedStatesMass.map((rowMass, xIdx) => {
      if (coordX === xIdx) {
        return rowMass.map((currentClickedState, yIdx) => {
          if (coordY === yIdx) {
            return newFlag === currentClickedState ? currentClickedState : newFlag;
          }
          return currentClickedState;
        })
      }
      return rowMass;
    });

    console.log("NEW CLICK STATE MASS  ", newClickedStatesMass);

    this.setState({ pixelClickedStatesMass: newClickedStatesMass });
  }

  render() {
    const { pixelMass } = this.props;
    return (
      <div
        className="pixel-field"
        style={{ display: "inline-block", border: "2px solid #1a1a1a" }}
      >
        {pixelMass.map((row, x) => [
          ...row.map((filled: string, y) => {
            return <Pixel key={`${x}-${y}`} filled={filled} x={x} y={y} onClick={this.onClick}/>;
          }),
          <br key={x} />,
        ])}
      </div>
    )
  }
}

export const getPixelField = (props: IPixelFieldProps) => <PixelField {...props} />;
