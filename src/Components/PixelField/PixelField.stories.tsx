import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, number, object } from "@storybook/addon-knobs";
import { PixelField } from "./PixelField";
export default {
  title: "Lesson 5 / PixelField",
  decorators: [withKnobs],
};

export const emptyPixelField = () => [
  <PixelField
    pixelMass={object("pixelMass", [
      ["0", "0", "0"],
      ["0", "0", "0"],
      ["0", "0", "0"],
    ])}
    key="jsx"
  />,
];
export const commonPixelField = () => [
  <PixelField
    pixelMass={object("pixelMass", [
      ["0", "0", "1"],
      ["0", "1", "0"],
      ["1", "0", "1"],
    ])}
    key="jsx"
  />,
];
