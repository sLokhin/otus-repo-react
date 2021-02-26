import React, { Component } from "react";
import styled from "@emotion/styled";

import { GameControls } from "../GameControls/GameControls";
import { GameOptions } from "../GameOptions/GameOptions";
import { FillSlider } from "../FillSlider/FillSlider";
import { PixelField } from "../PixelField/PixelField";

import { Grid, Paper } from "@material-ui/core";

const paperStyle = {};

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
}

const getInitialPixelMass = (n: number): boolean[][] => {
  return new Array(n).fill(undefined).map(() => new Array(n).fill(false));
};

export class App extends Component<Record<string, unknown>, AppState> {
  state = {
    pixelStatesMatrix: getInitialPixelMass(10),
    fillPercent: 20,
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
    this.setState({ fillPercent: percent });
  };

  render(): React.ReactNode {
    const { pixelStatesMatrix } = this.state;
    return (
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid container direction={"column"} alignItems={"center"}>
            <GameMenuWrapper className={"game-menu-wrapper"}>
              <GameControls></GameControls>
              <GameOptions></GameOptions>
              <FillSlider
                defaultPercent={20}
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
