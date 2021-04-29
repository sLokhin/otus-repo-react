import React, { useState } from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { FillSlider } from "./FillSlider";
import { DEFAULT_SLIDER_PERCENT } from "@/modules/Game/reducer";
export default {
  title: "Game of life / FillSlider",
  decorators: [withKnobs],
};

export const SliderStory = (): React.ReactNode => {
  const [value, setValue] = useState(DEFAULT_SLIDER_PERCENT);
  return (
    <FillSlider
      defaultPercent={DEFAULT_SLIDER_PERCENT}
      currentPercent={value}
      setFilledPercent={setValue}
    />
  );
};
