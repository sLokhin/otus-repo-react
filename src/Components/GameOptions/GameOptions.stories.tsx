import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { GameOptions } from "./GameOptions";
export default {
  title: "Lesson 9 / GameOptions",
  decorators: [withKnobs],
};

export const gameOptionsDefault = (): React.ReactNode => {
  return <GameOptions />;
};
