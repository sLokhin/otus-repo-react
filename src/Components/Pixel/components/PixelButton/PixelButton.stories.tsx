import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import { PixelButton } from "./PixelButton";
export default {
  title: "Lesson 5 / PixelButton",
  decorators: [withKnobs],
};

export const defaulPixelButton = (): React.ReactNode => {
  return (
    <PixelButton
      filled={false}
      onClick={action("Cell clicked jsx")}
      key="jsx"
    />
  );
};

export const filledPixelButton = (): React.ReactNode => {
  return (
    <PixelButton
      onClick={action("Cell clicked jsx")}
      filled={boolean("filled with", true)}
      key="jsx"
    />
  );
};
