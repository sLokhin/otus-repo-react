import React from "react";
import { Provider } from "react-redux";
import { action } from "@storybook/addon-actions";
import { withKnobs } from "@storybook/addon-knobs";
import { GameOptions } from "./GameOptions";
import { store } from "@/redux/store";
export default {
  title: "Game of life / GameOptions",
  decorators: [withKnobs],
};

const setFieldSize = action("Size option clicked");
const setGameSpeed = action("Speed option clicked");

export const gameOptionsDefault = (): React.ReactNode => {
  return (
    <Provider store={store}>
      <GameOptions setFieldSize={setFieldSize} setGameSpeed={setGameSpeed} />
    </Provider>
  );
};
