import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, withStyles } from "@material-ui/core";
import { lightGreen, lightBlue, blue } from "@material-ui/core/colors";
import { FillSlider } from "./FillSlider";
import {
  possibleSize,
  possibleSpeed,
  DEFAULT_SLIDER_PERCENT,
  actions,
} from "./reducer";
import { actions as gameProcessActions } from "@/modules/Game/reducer";
import { getRandomPixelMass } from "@/modules/Game/supportFunctions";
import { GameOfLifeState } from "@/redux/reducer";
import styled from "@emotion/styled";

const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 20px auto 0px;
  justify-content: space-around;
  align-items: flex-start;
`;

const OptionsRow = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  &:last-of-type {
    margin-bottom: 0px;
  }
`;

const LabelWrapper = styled.div`
  width: 130px;
  margin-right: 15px;
  font-size: 20px;
  text-align: left;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: bold;
  color: #2f42d0;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
`;

const BlueButton = withStyles(() => ({
  root: {
    backgroundColor: blue[500],
    "&:hover": {
      backgroundColor: blue[700],
    },
  },
}))(Button);

const LightBlueButton = withStyles(() => ({
  root: {
    backgroundColor: lightBlue[500],
    "&:hover": {
      backgroundColor: lightBlue[700],
    },
  },
}))(Button);

const LightGreenButton = withStyles(() => ({
  root: {
    backgroundColor: lightGreen[500],
    "&:hover": {
      backgroundColor: lightGreen[700],
    },
  },
}))(Button);

interface GameOptionsProps {
  setFieldSize?: (fieldSize: possibleSize) => void;
  setGameSpeed?: (gameSpeed: possibleSpeed) => void;
  setFilledPercent?: (fillPercent: number) => void;
}

export const GameOptions: FC<GameOptionsProps> = (props: GameOptionsProps) => {
  const fillPercent = useSelector(
    (state: GameOfLifeState) => state.gameOptionsState.fillPercent
  );
  const filedSize = useSelector(
    (state: GameOfLifeState) => state.gameOptionsState.fieldSize
  );
  const dispatch = useDispatch();
  const {
    setFieldSize = async (newFieldSize: possibleSize): Promise<void> => {
      if (filedSize !== newFieldSize) {
        const newPixelStatesMatrix = getRandomPixelMass(
          newFieldSize,
          fillPercent
        );
        dispatch(gameProcessActions.setPixelMatrix(newPixelStatesMatrix));
      }
      dispatch(actions.setFieldSize(newFieldSize));
    },
    setGameSpeed = async (newGameSpeed: possibleSpeed): Promise<void> => {
      dispatch(actions.setGameSpeed(newGameSpeed));
    },
    setFilledPercent = async (newFillPercent: number): Promise<void> => {
      if (fillPercent !== newFillPercent) {
        const newPixelStatesMatrix = getRandomPixelMass(
          filedSize,
          newFillPercent
        );
        dispatch(gameProcessActions.setPixelMatrix(newPixelStatesMatrix));
      }
      dispatch(actions.setFillPercent(newFillPercent));
    },
  } = props;

  return (
    <OptionsWrapper>
      <OptionsRow>
        <LabelWrapper>Field size:</LabelWrapper>
        <ButtonWrapper>
          <BlueButton
            classes={{ root: "options-button-size-small" }}
            variant={"contained"}
            color={"primary"}
            onClick={() => setFieldSize(possibleSize.small)}
          >
            Small
          </BlueButton>
          <LightBlueButton
            classes={{ root: "options-button-size-medium" }}
            variant={"contained"}
            color={"primary"}
            onClick={() => setFieldSize(possibleSize.medium)}
          >
            Medium
          </LightBlueButton>
          <LightGreenButton
            classes={{ root: "options-button-size-large" }}
            variant={"contained"}
            color={"primary"}
            onClick={() => setFieldSize(possibleSize.large)}
          >
            Large
          </LightGreenButton>
        </ButtonWrapper>
      </OptionsRow>
      <OptionsRow>
        <LabelWrapper>Game speed:</LabelWrapper>
        <ButtonWrapper>
          <BlueButton
            classes={{ root: "options-button-speed-slow" }}
            variant={"contained"}
            color={"primary"}
            onClick={() => setGameSpeed(possibleSpeed.slow)}
          >
            Slow
          </BlueButton>
          <LightBlueButton
            classes={{ root: "options-button-speed-medium" }}
            variant={"contained"}
            color={"primary"}
            onClick={() => setGameSpeed(possibleSpeed.medium)}
          >
            Medium
          </LightBlueButton>
          <LightGreenButton
            classes={{ root: "options-button-speed-fast" }}
            variant={"contained"}
            color={"primary"}
            onClick={() => setGameSpeed(possibleSpeed.fast)}
          >
            Fast
          </LightGreenButton>
        </ButtonWrapper>
      </OptionsRow>
      <FillSlider
        currentPercent={fillPercent}
        defaultPercent={DEFAULT_SLIDER_PERCENT}
        setFilledPercent={setFilledPercent}
      ></FillSlider>
    </OptionsWrapper>
  );
};
