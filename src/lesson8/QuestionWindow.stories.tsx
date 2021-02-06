import React from "react";
import { action } from "@storybook/addon-actions";
import {
  withKnobs,
  text,
  number,
  object,
  boolean,
} from "@storybook/addon-knobs";
import { QuestionWindow } from "./QuestionWindow";
export default {
  title: "Lesson 8/QuestionWindow",
  decorators: [withKnobs],
};

export const questionWindowDefault = () => {
  return (
    <QuestionWindow
      email={text("email", "default@mail.com")}
      question={text("question", "default question")}
      key="question-window-default"
    />
  );
};
