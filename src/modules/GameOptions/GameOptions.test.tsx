import React from "react";
import { Provider } from "react-redux";
import { mount } from "enzyme";
import { GameOptions } from "./GameOptions";
import { possibleSize, possibleSpeed } from "./reducer";
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
    expect(controls.find("button").length).toBe(6);
    expect(controls.find("button.options-button-size-small").length).toBe(1);
    expect(controls.find("button.options-button-size-medium").length).toBe(1);
    expect(controls.find("button.options-button-size-large").length).toBe(1);
    expect(controls.find("button.options-button-speed-slow").length).toBe(1);
    expect(controls.find("button.options-button-speed-medium").length).toBe(1);
    expect(controls.find("button.options-button-speed-fast").length).toBe(1);
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
    controls.find("button.options-button-size-small").simulate("click");
    expect(setFieldSize).toHaveBeenCalled();
    expect(setFieldSize).toHaveBeenCalledTimes(1);
    expect(setFieldSize.mock.calls[0][0]).toEqual(possibleSize.small);

    controls.find("button.options-button-size-medium").simulate("click");
    expect(setFieldSize).toHaveBeenCalledTimes(2);
    expect(setFieldSize.mock.calls[1][0]).toEqual(possibleSize.medium);

    controls.find("button.options-button-size-large").simulate("click");
    expect(setFieldSize).toHaveBeenCalledTimes(3);
    expect(setFieldSize.mock.calls[2][0]).toEqual(possibleSize.large);

    controls.find("button.options-button-speed-slow").simulate("click");
    expect(setGameSpeed).toHaveBeenCalledTimes(1);
    expect(setGameSpeed.mock.calls[0][0]).toEqual(possibleSpeed.slow);

    controls.find("button.options-button-speed-medium").simulate("click");
    expect(setGameSpeed).toHaveBeenCalledTimes(2);
    expect(setGameSpeed.mock.calls[1][0]).toEqual(possibleSpeed.medium);

    controls.find("button.options-button-speed-fast").simulate("click");
    expect(setGameSpeed).toHaveBeenCalledTimes(3);
    expect(setGameSpeed.mock.calls[2][0]).toEqual(possibleSpeed.fast);
  });
});
