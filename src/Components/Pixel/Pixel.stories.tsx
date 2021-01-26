import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, number } from "@storybook/addon-knobs";
import { Pixel } from "./Pixel";
export default {
  title: "Lesson 5 / Pixel",
  decorators: [withKnobs],
};
export const nonFilledPixel = () => [
  <Pixel
    onClick={action("Cell clicked jsx")}
    x={number("x", 1)}
    y={number("y", 23)}
    key="jsx"
  />,
];
export const filledPixel = () => [
  <Pixel
    onClick={action("Cell clicked jsx")}
    filled={text("filled with", "1")}
    x={number("x", 1)}
    y={number("y", 23)}
    key="jsx"
  />,
];
