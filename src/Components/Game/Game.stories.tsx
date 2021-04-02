import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { Game } from "./Game";
export default {
  title: "Game of life / Game",
  decorators: [withKnobs],
};

export const gameDefault = (): React.ReactNode => {
  return <Game />;
};
