import React, { Component } from "react";
import { Pixel } from "../Pixel/Pixel";

interface IPixelFieldProps {
  pixelMatrix: boolean[][];
}

interface IPixelFieldState {
  pixelClickedStatesMatrix: boolean[][];
}

export class PixelField extends Component<IPixelFieldProps, IPixelFieldState> {
  state = {
    pixelClickedStatesMatrix: this.props.pixelMatrix.map((row) =>
      row.map((isFilled) => isFilled)
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
    const { pixelClickedStatesMatrix } = this.state;
    return (
      <div
        className="pixel-field"
        style={{ display: "inline-block", border: "2px solid #1a1a1a" }}
      >
        {pixelClickedStatesMatrix.reduce(
          (
            result: Array<React.ReactNode[] | React.ReactNode>,
            row: boolean[],
            x: number
          ): Array<React.ReactNode[] | React.ReactNode> => {
            result.push(
              row.map(
                (filled: boolean, y: number): React.ReactNode => {
                  return (
                    <Pixel
                      key={`${x}-${y}`}
                      filled={filled}
                      x={x}
                      y={y}
                      onClick={this.onClick}
                    />
                  );
                }
              ),
              <br key={x} />
            );
            return result;
          },
          [] as Array<React.ReactNode[] | React.ReactNode>
        )}
      </div>
    );
  }
}
