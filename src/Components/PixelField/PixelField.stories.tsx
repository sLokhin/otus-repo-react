import React from "react";
import { withKnobs, object } from "@storybook/addon-knobs";
import { PixelField } from "./PixelField";
export default {
  title: "Lesson 5 / PixelField",
  decorators: [withKnobs],
};

export const emptyPixelField = (): React.ReactNode => {
  return (
    <PixelField
      pixelMatrix={object("pixelMatrix", [
        [false, false, false],
        [false, false, false],
        [false, false, false],
      ])}
      key="jsx"
    />
  );
};

export const commonPixelField = (): React.ReactNode => {
  return (
    <PixelField
      pixelMatrix={object("pixelMatrix", [
        [false, false, true],
        [false, true, false],
        [true, false, true],
      ])}
      key="jsx"
    />
  );
};
