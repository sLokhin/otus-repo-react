import React from "react";
import { mount } from "enzyme";
import { GameControls } from "./GameControls";

describe("GameControls test", () => {
  it("render GameControls", () => {
    const setControlsState = jest.fn();
    const controls = mount(
      <GameControls setControlsState={setControlsState} />
    );
    expect(controls.find("button").length).toBe(3);
    expect(controls.find("button.control-button-play").length).toBe(1);
    expect(controls.find("button.control-button-pause").length).toBe(1);
    expect(controls.find("button.control-button-reset").length).toBe(1);
  });
  it("click GameControls", () => {
    const setControlsState = jest.fn();
    const controls = mount(
      <GameControls setControlsState={setControlsState} />
    );
    controls.find("button.control-button-play").simulate("click");
    expect(setControlsState).toHaveBeenCalled();
    expect(setControlsState).toHaveBeenCalledTimes(1);
    expect(setControlsState.mock.calls[0][0]).toMatchObject({
      pause: false,
      reset: false,
    });

    controls.find("button.control-button-pause").simulate("click");
    expect(setControlsState).toHaveBeenCalledTimes(2);
    expect(setControlsState.mock.calls[1][0]).toMatchObject({
      pause: true,
      reset: false,
    });

    controls.find("button.control-button-reset").simulate("click");
    expect(setControlsState).toHaveBeenCalledTimes(3);
    expect(setControlsState.mock.calls[2][0]).toMatchObject({
      pause: true,
      reset: true,
    });
  });
});
