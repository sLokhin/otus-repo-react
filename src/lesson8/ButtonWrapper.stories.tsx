import React from "react";
import { action } from "@storybook/addon-actions";
import {
  withKnobs,
  text,
  number,
  object,
  boolean,
} from "@storybook/addon-knobs";
import { ButtonWrapper } from "./ButtonWrapper";
export default {
  title: "Lesson 8/ButtonWrapper",
  decorators: [withKnobs],
};

export const buttonWrapperActive = () => {
  return (
    <ButtonWrapper
      onClick={action("ButtonWrapper clicked")}
      isDisabled={boolean("Disabled", false)}
      key="button-wrapper-active"
    />
  );
};

export const buttonWrapperDisabled = () => {
  return (
    <ButtonWrapper
      onClick={action("ButtonWrapper clicked")}
      isDisabled={boolean("Disabled", true)}
      key="button-wrapper-disabled"
    />
  );
};