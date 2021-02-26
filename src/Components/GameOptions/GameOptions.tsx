import React from "react";
import { Button, withStyles } from "@material-ui/core";
import { lightGreen, lightBlue, blue } from "@material-ui/core/colors";
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

type possibleSize = "small" | "medium" | "large";
type possibleSpeed = "slow" | "medium" | "fast";

interface GameOptionsProps {
  setOptionsState?: (options: { size: string; speed: string }) => void;
}

interface GameOptionsState {
  size: possibleSize;
  speed: possibleSpeed;
}

type AllPropsRequired<T> = {
  [Property in keyof T]-?: T[Property];
};

export class GameOptions extends React.Component<
  GameOptionsProps,
  GameOptionsState
> {
  private args: AllPropsRequired<GameOptionsProps> = {
    ...this.props,
    setOptionsState:
      this.props.setOptionsState !== undefined
        ? this.props.setOptionsState
        : (options): void => {
            console.log(
              "setOptionsState",
              `size - ${options.size} --- speed - ${options.speed}`
            );
          },
  };

  state = {
    size: "medium",
    speed: "medium",
  } as GameOptionsState;

  setFieldSize = (size: possibleSize): void => {
    const options = {
      size: size,
      speed: this.state.speed,
    };
    this.setState(options);
    this.args.setOptionsState(options);
    console.log("setFieldSize");
  };

  setSpeed = (speed: possibleSpeed): void => {
    const options = {
      size: this.state.size,
      speed: speed,
    };
    this.setState(options);
    this.args.setOptionsState(options);
    console.log("setSpeed");
  };

  render(): React.ReactNode {
    return (
      <OptionsWrapper className={"options-wrapper"}>
        <OptionsRow className={"options-row"}>
          <LabelWrapper className={"options-label"}>Field size:</LabelWrapper>
          <ButtonWrapper className={"options-button-wrapper"}>
            <BlueButton
              classes={{ root: "options-button-size-small" }}
              variant={"contained"}
              color={"primary"}
              onClick={() => this.setFieldSize("small")}
            >
              Small
            </BlueButton>
            <LightBlueButton
              classes={{ root: "options-button-size-medium" }}
              variant={"contained"}
              color={"primary"}
              onClick={() => this.setFieldSize("medium")}
            >
              Medium
            </LightBlueButton>
            <LightGreenButton
              classes={{ root: "options-button-size-large" }}
              variant={"contained"}
              color={"primary"}
              onClick={() => this.setFieldSize("large")}
            >
              Large
            </LightGreenButton>
          </ButtonWrapper>
        </OptionsRow>
        <OptionsRow className={"options-row"}>
          <LabelWrapper className={"options-label"}>Game speed:</LabelWrapper>
          <ButtonWrapper className={"options-button-wrapper"}>
            <BlueButton
              classes={{ root: "options-button-speed-slow" }}
              variant={"contained"}
              color={"primary"}
              onClick={() => this.setSpeed("slow")}
            >
              Slow
            </BlueButton>
            <LightBlueButton
              classes={{ root: "options-button-speed-medium" }}
              variant={"contained"}
              color={"primary"}
              onClick={() => this.setSpeed("medium")}
            >
              Medium
            </LightBlueButton>
            <LightGreenButton
              classes={{ root: "options-button-speed-fast" }}
              variant={"contained"}
              color={"primary"}
              onClick={() => this.setSpeed("fast")}
            >
              Fast
            </LightGreenButton>
          </ButtonWrapper>
        </OptionsRow>
      </OptionsWrapper>
    );
  }
}
