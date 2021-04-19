import React from "react";
import { mount } from "enzyme";
import { Game, DEFAULT_SLIDER_PERCENT, DEFAULT_FIELD_SIZE } from "./Game";
import { PixelField } from "@/components/PixelField/PixelField";
import { Slider } from "@material-ui/core";

describe("Game test", () => {
  it("render Game", () => {
    const game = mount(<Game />);
    const pixelField = game.find(PixelField);

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
    expect(game.find("button.control-button-play").length).toBe(1);
    expect(game.find("button.control-button-pause").length).toBe(1);
    expect(game.find("button.control-button-reset").length).toBe(1);
    expect(game.find("button.options-button-size-small").length).toBe(1);
    expect(game.find("button.options-button-size-medium").length).toBe(1);
    expect(game.find("button.options-button-size-large").length).toBe(1);
    expect(game.find("button.options-button-speed-slow").length).toBe(1);
    expect(game.find("button.options-button-speed-medium").length).toBe(1);
    expect(game.find("button.options-button-speed-fast").length).toBe(1);
    expect(game.find(Slider).length).toBe(1);
  });
});
