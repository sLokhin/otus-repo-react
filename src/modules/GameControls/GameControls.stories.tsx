import React from "react";
import { Provider } from "react-redux";
import { action } from "@storybook/addon-actions";
import { withKnobs } from "@storybook/addon-knobs";
import { GameControls } from "./GameControls";
import { store } from "@/redux/store";
export default {
  title: "Game of life / GameControls",
  decorators: [withKnobs],
};

const setDefaultOptions = action("Game controls clicked (reset)");
const setGameState = action("Game controls clicked (play / pause)");

export const gameControlsDefault = (): React.ReactNode => {
  return (
    <Provider store={store}>
      <GameControls
        setDefaultOptions={setDefaultOptions}
        setGameState={setGameState}
      />
    </Provider>
  );
};
