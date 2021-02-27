import React from "react";
import { withKnobs, number } from "@storybook/addon-knobs";
import { FillSlider } from "./FillSlider";
export default {
  title: "Game of life / FillSlider",
  decorators: [withKnobs],
};

const setFilledPercent = (percent: number): void => {
  console.log("FillSlider story --- setFilledPercent", percent);
};

export const fillSliderDefault = (): React.ReactNode => {
  return (
    <FillSlider
      currentPercent={number("currentPercent", 20)}
      defaultPercent={number("defaultPercent", 20)}
      setFilledPercent={setFilledPercent}
    />
  );
};
