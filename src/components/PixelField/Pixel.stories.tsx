import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, number, boolean } from "@storybook/addon-knobs";
import { Pixel } from "./Pixel";
export default {
  title: "Game of life / Pixel",
  decorators: [withKnobs],
};

const elementClicked = action("Pixel clicked (element)");

export const nonFilledPixel = (): React.ReactNode => {
  return (
    <Pixel
      filled={false}
      x={number("x", 1)}
      y={number("y", 23)}
      onClick={elementClicked}
      key="jsx"
    />
  );
};

export const filledPixel = (): React.ReactNode => {
  return (
    <Pixel
      filled={boolean("is filled", true)}
      x={number("x", 1)}
      y={number("y", 23)}
      onClick={elementClicked}
      key="jsx"
    />
  );
};
