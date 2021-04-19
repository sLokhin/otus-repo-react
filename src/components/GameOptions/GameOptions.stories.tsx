import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { GameOptions } from "./GameOptions";
export default {
  title: "Game of life / GameOptions",
  decorators: [withKnobs],
};

const setOptionsSize = (): null => {
  return null;
};

const setOptionsSpeed = (): null => {
  return null;
};

export const gameOptionsDefault = (): React.ReactNode => {
  return (
    <GameOptions
      setOptionsSize={setOptionsSize}
      setOptionsSpeed={setOptionsSpeed}
    />
  );
};
