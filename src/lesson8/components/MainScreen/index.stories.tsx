import React from "react";
import { action } from "@storybook/addon-actions";
import {
  withKnobs,
  text,
  number,
  object,
  boolean,
} from "@storybook/addon-knobs";
import { MainScreen } from "./index";
export default {
  title: "Lesson 8/MainScreen",
  decorators: [withKnobs],
};

export const mainScreenDefault = (): React.ReactNode => {
  return <MainScreen />;
};
