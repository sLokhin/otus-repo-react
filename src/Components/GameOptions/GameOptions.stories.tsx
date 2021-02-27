import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { GameOptions } from "./GameOptions";
export default {
  title: "Game of life / GameOptions",
  decorators: [withKnobs],
};

const setOptionsSize = (): void => {
  console.log("GameOptions story --- setOptionsSize");
};

const setOptionsSpeed = (): void => {
  console.log("GameOptions story --- setOptionsSpeed");
};

export const gameOptionsDefault = (): React.ReactNode => {
  return (
    <GameOptions
      setOptionsSize={setOptionsSize}
      setOptionsSpeed={setOptionsSpeed}
    />
  );
};
