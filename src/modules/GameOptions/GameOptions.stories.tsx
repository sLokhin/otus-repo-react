import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs } from "@storybook/addon-knobs";
import { GameOptions } from "./GameOptions";
export default {
  title: "Game of life / GameOptions",
  decorators: [withKnobs],
};

const setFieldSize = action("Size option clicked (element)");

const setGameSpeed = action("Speed option clicked (element)");

export const gameOptionsDefault = (): React.ReactNode => {
  return (
    <GameOptions setFieldSize={setFieldSize} setGameSpeed={setGameSpeed} />
  );
};
