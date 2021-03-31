import React from "react";
import { withKnobs, object } from "@storybook/addon-knobs";
import { PixelField } from "./PixelField";
export default {
  title: "Game of life / PixelField",
  decorators: [withKnobs],
};

const onPixelClick = (): null => {
  return null;
};

export const emptyPixelField = (): React.ReactNode => {
  return (
    <PixelField
      pixelStatesMatrix={object("pixelMatrix", [
        [false, false, false],
        [false, false, false],
        [false, false, false],
      ])}
      onPixelClick={onPixelClick}
      key="jsx"
    />
  );
};

export const commonPixelField = (): React.ReactNode => {
  return (
    <PixelField
      pixelStatesMatrix={object("pixelMatrix", [
        [false, false, true],
        [false, true, false],
        [true, false, true],
      ])}
      onPixelClick={onPixelClick}
      key="jsx"
    />
  );
};
