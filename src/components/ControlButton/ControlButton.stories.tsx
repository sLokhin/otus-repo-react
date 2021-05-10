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

export const controlButtonCommon = (): React.ReactNode => {
  return (
    <ControlButton
      style={"lightBlue"}
      text={text("text", "Option Button")}
      disabled={boolean("disabled", false)}
      highlight={boolean("highlight", false)}
      onClick={onClickCommon}
    />
  );
};

export const playButton = (): React.ReactNode => {
  return (
    <ControlButton
      style={"blue"}
      startIcon={<PlayArrowIcon />}
      text={"Play"}
      disabled={boolean("disabled", false)}
      onClick={onClickPlay}
    />
  );
};

export const pauseButton = (): React.ReactNode => {
  return (
    <ControlButton
      style={"blue"}
      startIcon={<PauseIcon />}
      text={"Pause"}
      disabled={boolean("disabled", false)}
      onClick={onClickPause}
    />
  );
};

export const resetButton = (): React.ReactNode => {
  return (
    <ControlButton
      style={"blue"}
      startIcon={<RotateLeftIcon />}
      text={"Reset"}
      disabled={boolean("disabled", false)}
      onClick={onClickReset}
    />
  );
};
