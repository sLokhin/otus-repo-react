import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { FillSlider } from "./FillSlider";
export default {
  title: "Lesson 9 / FillSlider",
  decorators: [withKnobs],
};

export const fillSliderDefault = (): React.ReactNode => {
  return <FillSlider />;
};
