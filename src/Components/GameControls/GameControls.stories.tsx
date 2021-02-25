import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { GameControls } from "./GameControls";
export default {
  title: "Lesson 9 / GameControls",
  decorators: [withKnobs],
};

export const gameControlsDefault = (): React.ReactNode => {
  return <GameControls />;
};
