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
    pixelClickedStatesMatrix: this.props.pixelMatrix.map((row) =>
      row.map(() => false)
    ),
  };

  getNewClickedStatesMatrix(
    coordX: number,
    coordY: number,
    newFlag: boolean,
    currentClickedMatrix: boolean[][]
  ): boolean[][] {
    return currentClickedMatrix.map((rowMass, xIdx) => {
      if (coordX === xIdx) {
        return rowMass.map((currentClickedState, yIdx) => {
          if (coordY === yIdx) {
            return newFlag === currentClickedState
              ? currentClickedState
              : newFlag;
          }
          return currentClickedState;
        });
      }
      return rowMass;
    });
  }

  onClick = (coordX: number, coordY: number, newFlag: boolean): void => {
    const { pixelClickedStatesMatrix } = this.state;
    const newClickedStatesMatrix = this.getNewClickedStatesMatrix(
      coordX,
      coordY,
      newFlag,
      pixelClickedStatesMatrix
    );

    console.log("NEW CLICK STATE MATRIX  ", newClickedStatesMatrix);

    this.setState({ pixelClickedStatesMatrix: newClickedStatesMatrix });
  };

  render(): React.ReactNode {
    const { pixelMatrix } = this.props;
    return (
      <div
        className="pixel-field"
        style={{ display: "inline-block", border: "2px solid #1a1a1a" }}
      >
        {pixelMatrix.reduce((result: any, row: string[], x: number): any => {
          result.push(
            row.map((filled: string, y) => {
              return (
                <Pixel
                  key={`${x}-${y}`}
                  filled={filled}
                  x={x}
                  y={y}
                  onClick={this.onClick}
                />
              );
            }),
            <br key={x} />
          );
          return result;
        }, [])}
      </div>
    );
  }
}
