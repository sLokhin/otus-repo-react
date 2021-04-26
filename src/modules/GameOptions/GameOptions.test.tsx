import React from "react";
import { mount } from "enzyme";
import { GameOptions } from "./GameOptions";

describe("GameOptions test", () => {
  it("render GameOptions", () => {
    const setFieldSize = jest.fn();
    const setGameSpeed = jest.fn();
    const controls = mount(
      <GameOptions
        setFieldSize={setFieldSize}
        setGameSpeed={setGameSpeed}
      ></GameOptions>
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
      <GameOptions
        setFieldSize={setFieldSize}
        setGameSpeed={setGameSpeed}
      ></GameOptions>
    );
    controls.find("button.options-button-size-small").simulate("click");
    expect(setFieldSize).toHaveBeenCalled();
    expect(setFieldSize).toHaveBeenCalledTimes(1);
    expect(setFieldSize.mock.calls[0][0]).toEqual("small");

    controls.find("button.options-button-size-medium").simulate("click");
    expect(setFieldSize).toHaveBeenCalledTimes(2);
    expect(setFieldSize.mock.calls[1][0]).toEqual("medium");

    controls.find("button.options-button-size-large").simulate("click");
    expect(setFieldSize).toHaveBeenCalledTimes(3);
    expect(setFieldSize.mock.calls[2][0]).toEqual("large");

    controls.find("button.options-button-speed-slow").simulate("click");
    expect(setGameSpeed).toHaveBeenCalledTimes(1);
    expect(setGameSpeed.mock.calls[0][0]).toEqual("slow");

    controls.find("button.options-button-speed-medium").simulate("click");
    expect(setGameSpeed).toHaveBeenCalledTimes(2);
    expect(setGameSpeed.mock.calls[1][0]).toEqual("medium");

    controls.find("button.options-button-speed-fast").simulate("click");
    expect(setGameSpeed).toHaveBeenCalledTimes(3);
    expect(setGameSpeed.mock.calls[2][0]).toEqual("fast");
  });
});
