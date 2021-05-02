import React from "react";
import { Provider } from "react-redux";
import { mount } from "enzyme";
import { GameOptions } from "./GameOptions";
import { ControlButton } from "@/components/ControlButton/ControlButton";
import { possibleSize, possibleSpeed } from "@/modules/Game/reducer";
import { store } from "@/redux/store";

describe("GameOptions test", () => {
  it("render GameOptions", () => {
    const setFieldSize = jest.fn();
    const setGameSpeed = jest.fn();
    const controls = mount(
      <Provider store={store}>
        <GameOptions
          setFieldSize={setFieldSize}
          setGameSpeed={setGameSpeed}
        ></GameOptions>
      </Provider>
    );
    expect(controls.find(ControlButton).length).toBe(6);
  });
  it("click GameOptions", () => {
    const setFieldSize = jest.fn();
    const setGameSpeed = jest.fn();
    const controls = mount(
      <Provider store={store}>
        <GameOptions
          setFieldSize={setFieldSize}
          setGameSpeed={setGameSpeed}
        ></GameOptions>
      </Provider>
    );

    controls.find(ControlButton).at(0).simulate("click");
    expect(setGameSpeed).toHaveBeenCalled();
    expect(setGameSpeed).toHaveBeenCalledTimes(1);
    expect(setGameSpeed.mock.calls[0][0]).toEqual(possibleSpeed.slow);

    controls.find(ControlButton).at(1).simulate("click");
    expect(setGameSpeed).toHaveBeenCalledTimes(2);
    expect(setGameSpeed.mock.calls[1][0]).toEqual(possibleSpeed.medium);

    controls.find(ControlButton).at(2).simulate("click");
    expect(setGameSpeed).toHaveBeenCalledTimes(3);
    expect(setGameSpeed.mock.calls[2][0]).toEqual(possibleSpeed.fast);

    controls.find(ControlButton).at(3).simulate("click");
    expect(setFieldSize).toHaveBeenCalled();
    expect(setFieldSize).toHaveBeenCalledTimes(1);
    expect(setFieldSize.mock.calls[0][0]).toEqual(possibleSize.small);

    controls.find(ControlButton).at(4).simulate("click");
    expect(setFieldSize).toHaveBeenCalledTimes(2);
    expect(setFieldSize.mock.calls[1][0]).toEqual(possibleSize.medium);

    controls.find(ControlButton).at(5).simulate("click");
    expect(setFieldSize).toHaveBeenCalledTimes(3);
    expect(setFieldSize.mock.calls[2][0]).toEqual(possibleSize.large);
  });
});
