import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { GameControls } from "./GameControls";
export default {
  title: "Game of life / GameControls",
  decorators: [withKnobs],
};

const setControlsState = (): void => {
  console.log("GameControls story --- setControlsState");
};

export const gameControlsDefault = (): React.ReactNode => {
  return <GameControls setControlsState={setControlsState} />;
};
