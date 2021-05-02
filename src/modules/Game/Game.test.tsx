import React from "react";
import { Provider } from "react-redux";
import { mount } from "enzyme";
import { Game } from "./Game";
import { ControlButton } from "@/components/ControlButton/ControlButton";
import { DEFAULT_SLIDER_PERCENT, DEFAULT_FIELD_SIZE } from "./reducer";
import { store } from "@/redux/store";
import { PixelField } from "@/components/PixelField/PixelField";
import { Slider } from "@material-ui/core";

describe("Game test", () => {
  it("render Game", () => {
    const game = mount(
      <Provider store={store}>
        <Game />
      </Provider>
    );
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
    expect(game.find(ControlButton).length).toBe(9);
    expect(game.find(Slider).length).toBe(1);
  });
});
