import React, { Component } from "react";
import { Pixel } from "../Pixel/Pixel";

interface IPixelFieldProps {
  pixelMatrix: string[][];
}

interface IPixelFieldState {
  pixelClickedStatesMatrix: boolean[][];
}

export class PixelField extends Component<IPixelFieldProps, IPixelFieldState> {
  state = {
    pixelClickedStatesMatrix: this.props.pixelMatrix.map(row => row.map(pixel => false))
  };

  onClick = (coordX: number, coordY: number, newFlag: boolean) => {
    const { pixelClickedStatesMatrix } = this.state;

    const newClickedStatesMatrix: boolean[][] = pixelClickedStatesMatrix.map((rowMass, xIdx) => {
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

    console.log("NEW CLICK STATE MATRIX  ", newClickedStatesMatrix);

    this.setState({ pixelClickedStatesMatrix: newClickedStatesMatrix });
  }

  render() {
    const { pixelMatrix } = this.props;
    return (
      <div
        className="pixel-field"
        style={{ display: "inline-block", border: "2px solid #1a1a1a" }}
      >
        {pixelMatrix.map((row, x) => [
          row.map((filled: string, y) => {
            return <Pixel key={`${x}-${y}`} filled={filled} x={x} y={y} onClick={this.onClick}/>;
          }),
          <br key={x} />,
        ])}
      </div>
    )
  }
}

export const getPixelField = (props: IPixelFieldProps) => <PixelField {...props} />;
