import React, { FC, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions, possibleState } from "./reducer";
import { GameOfLifeState } from "@/redux/reducer";
import { getNewPixelMatrix, getNextGeneration } from "./supportFunctions";

import styled from "@emotion/styled";

import { PixelField } from "@/components/PixelField/PixelField";
import { GenCounter } from "@/components/GenCounter/GenCounter";
import { Congrat } from "@/components/Congrat/Congrat";
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
  const gameState = useSelector(
    (state: GameOfLifeState) => state.gameProcessState.gameState
  );
  const fieldSize = useSelector(
    (state: GameOfLifeState) => state.gameProcessState.fieldSize
  );
  const gameSpeed = useSelector(
    (state: GameOfLifeState) => state.gameProcessState.gameSpeed
  );
  const pixelStatesMatrix = useSelector(
    (state: GameOfLifeState) => state.gameProcessState.pixelMatrix
  );
  const genCounter = useSelector(
    (state: GameOfLifeState) => state.gameProcessState.genCounter
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

  const isSomePixelsAlive = useCallback((pixelStatesMatrix: boolean[][]) => {
    console.log("AAAA  ", pixelStatesMatrix);
    return pixelStatesMatrix.some((row) => {
      return row.some((pixel) => {
        return pixel;
      });
    });
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (gameState === possibleState.play) {
      interval = setInterval(() => {
        const nextGen = getNextGeneration(pixelStatesMatrix, fieldSize);
        dispatch(actions.setPixelMatrix(nextGen));
        dispatch(actions.incrementGenCounter());
        dispatch(actions.pushGenToHistory(JSON.stringify(nextGen)));
      }, 200 * gameSpeed);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [gameState, pixelStatesMatrix]);

  return (
    <Grid>
      <Paper elevation={10}>
        <Grid container direction={"column"} alignItems={"center"}>
          <GameMenuWrapper>
            <GameControls />
            <GameOptions gameState={gameState} />
          </GameMenuWrapper>
          <GenCounter counter={genCounter} />
          {gameState === possibleState.finish ? (
            <Congrat
              success={isSomePixelsAlive(
                JSON.parse(JSON.stringify(pixelStatesMatrix))
              )}
            />
          ) : null}
          <PixelField
            pixelStatesMatrix={pixelStatesMatrix}
            onPixelClick={onPixelClick}
            disabled={gameState === possibleState.finish}
          />
        </Grid>
      </Paper>
    </Grid>
  );
};
