import React from "react";
import { mount } from "enzyme";
import { GameOptions } from "./GameOptions";

describe("GameOptions test", () => {
  it("render GameOptions", () => {
    const controls = mount(<GameOptions />);
    expect(controls.find("button").length).toBe(6);
    expect(controls.find("button.options-button-size-small").length).toBe(1);
    expect(controls.find("button.options-button-size-medium").length).toBe(1);
    expect(controls.find("button.options-button-size-large").length).toBe(1);
    expect(controls.find("button.options-button-speed-slow").length).toBe(1);
    expect(controls.find("button.options-button-speed-medium").length).toBe(1);
    expect(controls.find("button.options-button-speed-fast").length).toBe(1);
  });
  it("click GameOptions", () => {
    const setOptionsState = jest.fn();
    const controls = mount(<GameOptions setOptionsState={setOptionsState} />);
    controls.find("button.options-button-size-small").simulate("click");
    expect(setOptionsState).toHaveBeenCalled();
    expect(setOptionsState).toHaveBeenCalledTimes(1);
    expect(setOptionsState.mock.calls[0][0]).toMatchObject({
      size: "small",
      speed: "medium",
    });

    controls.find("button.options-button-size-medium").simulate("click");
    expect(setOptionsState).toHaveBeenCalledTimes(2);
    expect(setOptionsState.mock.calls[1][0]).toMatchObject({
      size: "medium",
      speed: "medium",
    });

    controls.find("button.options-button-size-large").simulate("click");
    expect(setOptionsState).toHaveBeenCalledTimes(3);
    expect(setOptionsState.mock.calls[2][0]).toMatchObject({
      size: "large",
      speed: "medium",
    });

    controls.find("button.options-button-speed-slow").simulate("click");
    expect(setOptionsState).toHaveBeenCalledTimes(4);
    expect(setOptionsState.mock.calls[3][0]).toMatchObject({
      size: "large",
      speed: "slow",
    });

    controls.find("button.options-button-speed-medium").simulate("click");
    expect(setOptionsState).toHaveBeenCalledTimes(5);
    expect(setOptionsState.mock.calls[4][0]).toMatchObject({
      size: "large",
      speed: "medium",
    });

    controls.find("button.options-button-speed-fast").simulate("click");
    expect(setOptionsState).toHaveBeenCalledTimes(6);
    expect(setOptionsState.mock.calls[5][0]).toMatchObject({
      size: "large",
      speed: "fast",
    });
  });
});
