import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "./reducer";
import { GameOfLifeState } from "@/redux/reducer";
import { getNewPixelMatrix } from "./supportFunctions";

import styled from "@emotion/styled";

import { PixelField } from "@/components/PixelField/PixelField";
import { GameControls } from "@/modules/GameControls/GameControls";
import { GameOptions } from "@/modules/GameOptions/GameOptions";

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

export const Game: FC = () => {
  const pixelStatesMatrix = useSelector(
    (state: GameOfLifeState) => state.gameProcessState.pixelMatrix
  );
  const dispatch = useDispatch();

  const onPixelClick = (
    coordX: number,
    coordY: number,
    newFlag: boolean
  ): void => {
    const newPixelStatesMatrix = getNewPixelMatrix(
      coordX,
      coordY,
      newFlag,
      pixelStatesMatrix
    );

    dispatch(actions.setPixelMatrix(newPixelStatesMatrix));
  };

  return (
    <Grid>
      <Paper elevation={10}>
        <Grid container direction={"column"} alignItems={"center"}>
          <GameMenuWrapper>
            <GameControls />
            <GameOptions />
          </GameMenuWrapper>
          <PixelField
            pixelStatesMatrix={pixelStatesMatrix}
            onPixelClick={onPixelClick}
          />
        </Grid>
      </Paper>
    </Grid>
  );
};
