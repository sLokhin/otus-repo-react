import React, { Component, FC } from "react";
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

type AppProps = {};

export const App: FC<AppProps> = (props: AppProps) => {
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid container direction={"column"} alignItems={"center"}>
          <GameMenuWrapper className={"game-menu-wrapper"}>
            <GameControls></GameControls>
            <GameOptions></GameOptions>
            <FillSlider></FillSlider>
          </GameMenuWrapper>
          <PixelField
            pixelMatrix={[
              [false, false, false, false, false],
              [false, false, false, false, false],
              [false, false, false, false, false],
              [false, false, false, false, false],
              [false, false, false, false, false],
            ]}
          />
        </Grid>
      </Paper>
    </Grid>
  );
};
