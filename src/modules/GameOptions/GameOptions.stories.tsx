import React from "react";
import { Provider } from "react-redux";
import { action } from "@storybook/addon-actions";
import { withKnobs } from "@storybook/addon-knobs";
import { GameOptions } from "./GameOptions";
import { possibleState } from "@/modules/Game/reducer";
import { store } from "@/redux/store";
export default {
  title: "Game of life / GameOptions",
  decorators: [withKnobs],
};

const setFieldSize = action("Size option clicked");
const setGameSpeed = action("Speed option clicked");

export const gameOptionsStatePause = (): React.ReactNode => {
  return (
    <Provider store={store}>
      <GameOptions
        gameState={possibleState.pause}
        setFieldSize={setFieldSize}
        setGameSpeed={setGameSpeed}
      />
    </Provider>
  );
};

export const gameOptionsStatePlay = (): React.ReactNode => {
  return (
    <Provider store={store}>
      <GameOptions
        gameState={possibleState.play}
        setFieldSize={setFieldSize}
        setGameSpeed={setGameSpeed}
      />
    </Provider>
  );
};
