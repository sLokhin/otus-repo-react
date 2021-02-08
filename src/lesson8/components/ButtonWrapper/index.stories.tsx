import React from "react";
import { action } from "@storybook/addon-actions";
import {
  withKnobs,
  text,
  number,
  object,
  boolean,
} from "@storybook/addon-knobs";
import { ButtonWrapper } from "./index";
export default {
  title: "Lesson 8/ButtonWrapper",
  decorators: [withKnobs],
};

export const buttonWrapperActive = () => {
  return (
    <ButtonWrapper
      onClick={action("ButtonWrapper clicked")}
      isDisabled={boolean("Disabled", false)}
    />
  );
};

export const buttonWrapperDisabled = () => {
  return (
    <ButtonWrapper
      onClick={action("ButtonWrapper clicked")}
      isDisabled={boolean("Disabled", true)}
    />
  );
};
