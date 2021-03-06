import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text } from "@storybook/addon-knobs";
import { GameHeader } from "./GameHeader";
export default {
  title: "Game of life / GameHeader",
  decorators: [withKnobs],
};

const onLogout = action("Logout clicked (element)");

export const gameHeaderDefault = (): React.ReactNode => {
  return (
    <GameHeader
      name={text("player name from story", "Storybook Player")}
      onLogout={onLogout}
    />
  );
};
