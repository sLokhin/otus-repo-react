import React from "react";
import { mount } from "enzyme";
import { App, DEFAULT_SLIDER_PERCENT, DEFAULT_FIELD_SIZE } from "./App";
import { PixelField } from "../PixelField/PixelField";
import { Slider } from "@material-ui/core";

describe("App test", () => {
  it("render App", () => {
    const app = mount(<App />);
    const pixelField = app.find(PixelField);

    const expectedFilledPixelsAmount = Math.round(
      Math.pow(DEFAULT_FIELD_SIZE, 2) * (DEFAULT_SLIDER_PERCENT / 100)
    );

    let filledPixelsAmount = 0;
    pixelField.props().pixelStatesMatrix.forEach((pixelRow) => {
      pixelRow.forEach((pixel) => {
        pixel ? filledPixelsAmount++ : null;
      });
    });

    expect(filledPixelsAmount).toEqual(expectedFilledPixelsAmount);
    expect(app.find("button.control-button-play").length).toBe(1);
    expect(app.find("button.control-button-pause").length).toBe(1);
    expect(app.find("button.control-button-reset").length).toBe(1);
    expect(app.find("button.options-button-size-small").length).toBe(1);
    expect(app.find("button.options-button-size-medium").length).toBe(1);
    expect(app.find("button.options-button-size-large").length).toBe(1);
    expect(app.find("button.options-button-speed-slow").length).toBe(1);
    expect(app.find("button.options-button-speed-medium").length).toBe(1);
    expect(app.find("button.options-button-speed-fast").length).toBe(1);
    expect(app.find(Slider).length).toBe(1);
  });
});
