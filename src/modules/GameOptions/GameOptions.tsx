import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ControlButton } from "@/components/ControlButton/ControlButton";
import { FillSlider } from "./FillSlider";
import {
  possibleSize,
  possibleSpeed,
  DEFAULT_SLIDER_PERCENT,
  actions,
} from "@/modules/Game/reducer";
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
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  width: 130px;
  margin-right: 15px;
  font-size: 20px;
  text-align: left;
  font-weight: bold;
  color: #2f42d0;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
`;

interface GameOptionsProps {
  setFieldSize?: (fieldSize: possibleSize) => void;
  setGameSpeed?: (gameSpeed: possibleSpeed) => void;
  setFilledPercent?: (fillPercent: number) => void;
}

export const GameOptions: FC<GameOptionsProps> = (props: GameOptionsProps) => {
  const fillPercent = useSelector(
    (state: GameOfLifeState) => state.gameProcessState.fillPercent
  );
  const filedSize = useSelector(
    (state: GameOfLifeState) => state.gameProcessState.fieldSize
  );
  const dispatch = useDispatch();
  const {
    setFieldSize = (newFieldSize: possibleSize): void => {
      if (filedSize !== newFieldSize) {
        const newPixelStatesMatrix = getRandomPixelMass(
          newFieldSize,
          fillPercent
        );
        dispatch(actions.setFieldSize(newFieldSize));
        dispatch(gameProcessActions.setPixelMatrix(newPixelStatesMatrix));
      }
    },
    setGameSpeed = (newGameSpeed: possibleSpeed): void => {
      dispatch(actions.setGameSpeed(newGameSpeed));
    },
    setFilledPercent = (newFillPercent: number): void => {
      if (fillPercent !== newFillPercent) {
        const newPixelStatesMatrix = getRandomPixelMass(
          filedSize,
          newFillPercent
        );
        dispatch(actions.setFillPercent(newFillPercent));
        dispatch(gameProcessActions.setPixelMatrix(newPixelStatesMatrix));
      }
    },
  } = props;

  return (
    <OptionsWrapper>
      <OptionsRow>
        <LabelWrapper>Field size:</LabelWrapper>
        <ButtonWrapper>
          <ControlButton
            style={"blue"}
            text={"Small"}
            onClick={() => setFieldSize(possibleSize.small)}
          />
          <ControlButton
            style={"lightBlue"}
            text={"Medium"}
            onClick={() => setFieldSize(possibleSize.medium)}
          />
          <ControlButton
            style={"lightGreen"}
            text={"Large"}
            onClick={() => setFieldSize(possibleSize.large)}
          />
        </ButtonWrapper>
      </OptionsRow>
      <OptionsRow>
        <LabelWrapper>Game speed:</LabelWrapper>
        <ButtonWrapper>
          <ControlButton
            style={"blue"}
            text={"Slow"}
            onClick={() => setGameSpeed(possibleSpeed.slow)}
          />
          <ControlButton
            style={"lightBlue"}
            text={"Medium"}
            onClick={() => setGameSpeed(possibleSpeed.medium)}
          />
          <ControlButton
            style={"lightGreen"}
            text={"Fast"}
            onClick={() => setGameSpeed(possibleSpeed.fast)}
          />
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
