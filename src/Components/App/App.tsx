import React, { Component } from "react";
import styled from "@emotion/styled";

import { GameControls } from "../GameControls/GameControls";
import { GameOptions } from "../GameOptions/GameOptions";
import { FillSlider } from "../FillSlider/FillSlider";
import { PixelField } from "../PixelField/PixelField";

import { Grid, Paper } from "@material-ui/core";

const GameMenuWrapper = styled.div`
  position: relative;
  left: 0px;
  right: 0px;
  display: flex;
  flex-direction: column;
  width: 460px;
  padding: 20px;
  margin: 0px auto;
  justify-content: space-around;
  align-items: center;
`;

interface AppState {
  pixelStatesMatrix: boolean[][];
  fillPercent: number;
  pause: boolean;
}

const getInitialPixelMass = (n: number): boolean[][] => {
  return new Array(n).fill(undefined).map(() => new Array(n).fill(false));
};

const getRandomPixelMass = (n: number, percent: number): boolean[][] => {
  const pixelMatrix: boolean[][] = getInitialPixelMass(n);
  let a = Math.round(n * n * (percent / 100));
  let b = n * n;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (Math.random() < a / b) {
        pixelMatrix[i][j] = true;
        a--;
      }
      b--;
    }
  }
  return pixelMatrix;
};

const defaultFieldSize = 10;
const defaultSliderPercent = 20;

export class App extends Component<Record<string, unknown>, AppState> {
  state = {
    pixelStatesMatrix: getRandomPixelMass(
      defaultFieldSize,
      defaultSliderPercent
    ),
    fillPercent: defaultSliderPercent,
    pause: true,
    reset: false,
  };

  getNewPixelStatesMatrix(
    coordX: number,
    coordY: number,
    newFlag: boolean,
    currentPixelMatrix: boolean[][]
  ): boolean[][] {
    return currentPixelMatrix.map((rowMass, xIdx) => {
      if (coordX === xIdx) {
        return rowMass.map((currentPixelState, yIdx) => {
          if (coordY === yIdx) {
            return newFlag === currentPixelState ? currentPixelState : newFlag;
          }
          return currentPixelState;
        });
      }
      return rowMass;
    });
  }

  onPixelClick = (coordX: number, coordY: number, newFlag: boolean): void => {
    const { pixelStatesMatrix } = this.state;
    const newPixelStatesMatrix = this.getNewPixelStatesMatrix(
      coordX,
      coordY,
      newFlag,
      pixelStatesMatrix
    );

    console.log("NEW CLICK STATE MATRIX FROM APP ", newPixelStatesMatrix);

    this.setState({ pixelStatesMatrix: newPixelStatesMatrix });
  };

  setFilledPercent = (percent: number): void => {
    console.log("SET FILL PERCENt FROM APP", percent);
    const { fillPercent } = this.state;
    const newPixelStatesMatrix = getRandomPixelMass(defaultFieldSize, percent);
    if (percent !== fillPercent) {
      this.setState({
        pixelStatesMatrix: newPixelStatesMatrix,
        fillPercent: percent,
      });
    }
  };

  resetFieldAndSlider = (): Pick<
    AppState,
    "fillPercent" | "pixelStatesMatrix"
  > => {
    console.log("resetFieldAndSlider from App");
    return {
      fillPercent: defaultSliderPercent,
      pixelStatesMatrix: getRandomPixelMass(
        defaultFieldSize,
        defaultSliderPercent
      ),
    };
  };

  setControlsState = (options: { pause: boolean; reset: boolean }): void => {
    const { pause, reset } = options;
    let fieldsFromReset = {};
    if (reset) {
      fieldsFromReset = this.resetFieldAndSlider();
    }

    const newState = {
      pause,
      ...fieldsFromReset,
    };
    this.setState(newState);
    console.log("setControlsState from App");
  };

  render(): React.ReactNode {
    const { pixelStatesMatrix, fillPercent } = this.state;
    return (
      <Grid>
        <Paper elevation={10}>
          <Grid container direction={"column"} alignItems={"center"}>
            <GameMenuWrapper className={"game-menu-wrapper"}>
              <GameControls
                setControlsState={this.setControlsState}
              ></GameControls>
              <GameOptions></GameOptions>
              <FillSlider
                currentPercent={fillPercent}
                defaultPercent={defaultSliderPercent}
                setFilledPercent={this.setFilledPercent}
              ></FillSlider>
            </GameMenuWrapper>
            <PixelField
              pixelStatesMatrix={pixelStatesMatrix}
              onPixelClick={this.onPixelClick}
            />
          </Grid>
        </Paper>
      </Grid>
    );
  }
}
