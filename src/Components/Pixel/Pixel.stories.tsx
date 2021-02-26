import React from "react";
import { withKnobs, number, boolean } from "@storybook/addon-knobs";
import { Pixel } from "./Pixel";
export default {
  title: "Lesson 5 / Pixel",
  decorators: [withKnobs],
};

export const nonFilledPixel = (): React.ReactNode => {
  return (
    <Pixel filled={false} x={number("x", 1)} y={number("y", 23)} key="jsx" />
  );
};

export const filledPixel = (): React.ReactNode => {
  return (
    <Pixel
      filled={boolean("is filled", true)}
      x={number("x", 1)}
      y={number("y", 23)}
      key="jsx"
    />
  );
};
