import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, number, object } from "@storybook/addon-knobs";
import { PixelField } from "./PixelField";
export default {
  title: "Lesson 5 / PixelField",
  decorators: [withKnobs],
};

const elementClickedJsx = action("Pixel clicked (jsx)")

export const emptyPixelField = () => [
  <PixelField
    pixelMass={object("pixelMass", [
      ["0", "0", "0"],
      ["0", "0", "0"],
      ["0", "0", "0"]
    ])}
    onClick={elementClickedJsx}
    key="jsx"
  />,
];
export const commonPixelField = () => [
  <PixelField
    pixelMass={object("pixelMass", [
      ["0", "0", "1"],
      ["0", "1", "0"],
      ["1", "0", "1"]
    ])}
    onClick={elementClickedJsx}
    key="jsx"
  />,
];
