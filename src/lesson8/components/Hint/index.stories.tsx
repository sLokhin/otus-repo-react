import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import { Hint } from "./index";
export default {
  title: "Lesson 8/Hint",
  decorators: [withKnobs],
};

export const hintDefault = (): React.ReactNode => {
  return <Hint demoStyles={true} />;
};

export const hintWithCustomText = (): React.ReactNode => {
  return <Hint demoStyles={true} message={text("hint text", "custom text")} />;
};
