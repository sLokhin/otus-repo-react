import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, number } from "@storybook/addon-knobs";
import { PixelButton } from "./PixelButton";
export default {
  title: "Lesson 5 / PixelButton",
  decorators: [withKnobs],
};

export const defaulPixelButton = () => {
  return <PixelButton onClick={action("Cell clicked jsx")} key="jsx" />
};

export const filledPixelButton = () => {
  return <PixelButton
    onClick={action("Cell clicked jsx")}
    filled={text("filled with", "1")}
    key="jsx"
  />
};
