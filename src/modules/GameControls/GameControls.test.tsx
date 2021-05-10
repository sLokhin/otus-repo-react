import React from "react";
import { Provider } from "react-redux";
import { mount } from "enzyme";
import { GameControls } from "./GameControls";
import { ControlButton } from "@/components/ControlButton/ControlButton";
import {
  possibleState,
  possibleSize,
  possibleSpeed,
  DEFAULT_SLIDER_PERCENT,
} from "@/modules/Game/reducer";
import { store } from "@/redux/store";

describe("GameControls test", () => {
  it("render GameControls", () => {
    const controls = mount(
      <Provider store={store}>
        <GameControls />
      </Provider>
    );
    expect(controls.find(ControlButton).length).toBe(3);
  });
  it("click GameControls", () => {
    const setDefaultOptions = jest.fn();
    const setGameState = jest.fn();
    const controls = mount(
      <Provider store={store}>
        <GameControls
          setDefaultOptions={setDefaultOptions}
          setGameState={setGameState}
        />
      </Provider>
    );
    controls.find(ControlButton).at(0).simulate("click");
    expect(setGameState).toHaveBeenCalled();
    expect(setGameState).toHaveBeenCalledTimes(1);
    expect(setGameState.mock.calls[0][0]).toEqual(possibleState.play);

    controls.find(ControlButton).at(1).simulate("click");
    expect(setGameState).toHaveBeenCalledTimes(2);
    expect(setGameState.mock.calls[1][0]).toEqual(possibleState.pause);

    controls.find(ControlButton).at(2).simulate("click");
    expect(setDefaultOptions).toHaveBeenCalled();
    expect(setDefaultOptions).toHaveBeenCalledTimes(1);
    const gameProcessState = store.getState().gameProcessState;
    expect(gameProcessState.gameState).toEqual(possibleState.pause);
    expect(gameProcessState.fieldSize).toEqual(possibleSize.small);
    expect(gameProcessState.gameSpeed).toEqual(possibleSpeed.medium);
    expect(gameProcessState.fillPercent).toEqual(DEFAULT_SLIDER_PERCENT);
  });
});
