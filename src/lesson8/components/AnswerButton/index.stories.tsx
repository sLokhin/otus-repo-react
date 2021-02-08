import React from "react";
import { action } from "@storybook/addon-actions";
import {
  withKnobs,
  text,
  number,
  object,
  boolean,
} from "@storybook/addon-knobs";
import { AnswerButton } from "./index";
export default {
  title: "Lesson 8/AnswerButton",
  decorators: [withKnobs],
};

export const answerButtonActive = () => {
  return (
    <AnswerButton
      onClick={action("AnswerButton clicked")}
      isDisabled={boolean("Disabled", false)}
    />
  );
};

export const answerButtonDisabled = () => {
  return (
    <AnswerButton
      onClick={action("AnswerButton clicked")}
      isDisabled={boolean("Disabled", true)}
    />
  );
};
