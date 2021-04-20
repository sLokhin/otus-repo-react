import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs } from "@storybook/addon-knobs";
import { GameOptions } from "./GameOptions";
export default {
  title: "Game of life / GameOptions",
  decorators: [withKnobs],
};

const setOptionsSize = action("Size option clicked (element)");

const setOptionsSpeed = action("Speed option clicked (element)");

export const gameOptionsDefault = (): React.ReactNode => {
  return (
    <GameOptions
      setOptionsSize={setOptionsSize}
      setOptionsSpeed={setOptionsSpeed}
    />
  );
};
