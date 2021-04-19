import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import { GameHeader } from "./GameHeader";
export default {
  title: "Game of life / GameHeader",
  decorators: [withKnobs],
};

const onLogout = (): null => {
  return null;
};

export const gameHeaderDefault = (): React.ReactNode => {
  return (
    <GameHeader
      name={text("player name from story", "Player-from-story")}
      onLogout={onLogout}
    />
  );
};
