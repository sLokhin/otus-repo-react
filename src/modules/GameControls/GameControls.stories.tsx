import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs } from "@storybook/addon-knobs";
import { GameControls } from "./GameControls";
export default {
  title: "Game of life / GameControls",
  decorators: [withKnobs],
};

const setControlsState = action("Game controls clicked (element)");

export const gameControlsDefault = (): React.ReactNode => {
  return <GameControls setControlsState={setControlsState} />;
};
