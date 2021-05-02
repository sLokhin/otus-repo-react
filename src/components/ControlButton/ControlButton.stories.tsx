import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { ControlButton } from "./ControlButton";

import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";

export default {
  title: "Game of life / ControlButton",
  decorators: [withKnobs],
};

const onClickCommon = action("CommomButton clicked");
const onClickPlay = action("PlayButton clicked");
const onClickPause = action("PauseButton clicked");
const onClickReset = action("ResetButton clicked");

export const controlButtonActive = (): React.ReactNode => {
  return (
    <ControlButton
      style={"lightBlue"}
      text={text("text", "Option Button")}
      highlight={boolean("highlight", false)}
      onClick={onClickCommon}
    />
  );
};

export const controlButtonDisabled = (): React.ReactNode => {
  return (
    <ControlButton
      style={"lightBlue"}
      text={text("text", "Option Button")}
      disabled={true}
      highlight={false}
      onClick={onClickCommon}
    />
  );
};

export const playButtonActive = (): React.ReactNode => {
  return (
    <ControlButton
      style={"blue"}
      startIcon={<PlayArrowIcon />}
      text={"Play"}
      onClick={onClickPlay}
    />
  );
};

export const pauseButtonActive = (): React.ReactNode => {
  return (
    <ControlButton
      style={"blue"}
      startIcon={<PauseIcon />}
      text={"Pause"}
      onClick={onClickPause}
    />
  );
};

export const resetButtonActive = (): React.ReactNode => {
  return (
    <ControlButton
      style={"blue"}
      startIcon={<RotateLeftIcon />}
      text={"Reset"}
      onClick={onClickReset}
    />
  );
};
