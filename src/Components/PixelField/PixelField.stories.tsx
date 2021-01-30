import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, number, object } from "@storybook/addon-knobs";
import { PixelField } from "./PixelField";
export default {
  title: "Lesson 5 / PixelField",
  decorators: [withKnobs],
};

export const emptyPixelField = () => {
  return <PixelField
    pixelMatrix={object("pixelMatrix", [
      ["0", "0", "0"],
      ["0", "0", "0"],
      ["0", "0", "0"],
    ])}
    key="jsx"
  />
};

export const commonPixelField = () => {
  return <PixelField
    pixelMatrix={object("pixelMatrix", [
      ["0", "0", "1"],
      ["0", "1", "0"],
      ["1", "0", "1"],
    ])}
    key="jsx"
  />
};
