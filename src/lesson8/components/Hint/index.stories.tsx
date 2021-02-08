import React from "react";
import { action } from "@storybook/addon-actions";
import {
  withKnobs,
  text,
  number,
  object,
  boolean,
} from "@storybook/addon-knobs";
import { Hint } from "./index";
export default {
  title: "Lesson 8/Hint",
  decorators: [withKnobs],
};

export const hintDefault = () => {
  return <Hint demoStyles={true} />;
};

export const hintWithCustomText = () => {
  return <Hint demoStyles={true} message={text("hint text", "custom text")} />;
};