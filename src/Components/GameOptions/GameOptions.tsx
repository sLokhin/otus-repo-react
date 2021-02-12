import React from "react";
import { Button, withStyles } from "@material-ui/core";
import { lightGreen, lightBlue, blue } from "@material-ui/core/colors";
import styled from "@emotion/styled";

const OptionsWrapper = styled.div`
  display: flex;
  margin: auto;
  justify-content: space-around;
  align-items: center;
  width: 400px;
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

interface IGameOptionsProps {
  setOptionsState: (options: { size: string; speed: string }) => void;
}

interface IGameOptionsState {
  size: possibleSize;
  speed: possibleSpeed;
}

export class GameOptions extends React.Component<
  IGameOptionsProps,
  IGameOptionsState
> {
  static defaultProps: IGameOptionsProps = {
    setOptionsState: (options): void => {
      console.log(
        "setOptionsState",
        `size - ${options.size} --- speed - ${options.speed}`
      );
    },
  };

  state = {
    size: "medium",
    speed: "medium",
  } as IGameOptionsState;

  setFieldSize = (size: possibleSize): void => {
    const options = {
      size: size,
      speed: this.state.speed,
    };
    this.setState(options);
    this.props.setOptionsState(options);
    console.log("setFieldSize");
  };

  setSpeed = (speed: possibleSpeed): void => {
    const options = {
      size: this.state.size,
      speed: speed,
    };
    this.setState(options);
    this.props.setOptionsState(options);
    console.log("setSpeed");
  };

  render(): React.ReactNode {
    return (
      <OptionsWrapper className={"options-wrapper"}>
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
      </OptionsWrapper>
    );
  }
}
