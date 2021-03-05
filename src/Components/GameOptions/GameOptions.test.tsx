import React from "react";
import { mount } from "enzyme";
import { GameOptions } from "./GameOptions";

describe("GameOptions test", () => {
  it("render GameOptions", () => {
    const setOptionsSize = jest.fn();
    const setOptionsSpeed = jest.fn();
    const controls = mount(
      <GameOptions
        setOptionsSize={setOptionsSize}
        setOptionsSpeed={setOptionsSpeed}
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
    const setOptionsSize = jest.fn();
    const setOptionsSpeed = jest.fn();
    const controls = mount(
      <GameOptions
        setOptionsSize={setOptionsSize}
        setOptionsSpeed={setOptionsSpeed}
      ></GameOptions>
    );
    controls.find("button.options-button-size-small").simulate("click");
    expect(setOptionsSize).toHaveBeenCalled();
    expect(setOptionsSize).toHaveBeenCalledTimes(1);
    expect(setOptionsSize.mock.calls[0][0]).toEqual("small");

    controls.find("button.options-button-size-medium").simulate("click");
    expect(setOptionsSize).toHaveBeenCalledTimes(2);
    expect(setOptionsSize.mock.calls[1][0]).toEqual("medium");

    controls.find("button.options-button-size-large").simulate("click");
    expect(setOptionsSize).toHaveBeenCalledTimes(3);
    expect(setOptionsSize.mock.calls[2][0]).toEqual("large");

    controls.find("button.options-button-speed-slow").simulate("click");
    expect(setOptionsSpeed).toHaveBeenCalledTimes(1);
    expect(setOptionsSpeed.mock.calls[0][0]).toEqual("slow");

    controls.find("button.options-button-speed-medium").simulate("click");
    expect(setOptionsSpeed).toHaveBeenCalledTimes(2);
    expect(setOptionsSpeed.mock.calls[1][0]).toEqual("medium");

    controls.find("button.options-button-speed-fast").simulate("click");
    expect(setOptionsSpeed).toHaveBeenCalledTimes(3);
    expect(setOptionsSpeed.mock.calls[2][0]).toEqual("fast");
  });
});
