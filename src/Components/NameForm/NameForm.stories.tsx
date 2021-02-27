import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { NameForm } from "./NameForm";
export default {
  title: "Game of life / NameForm",
  decorators: [withKnobs],
};

export const nameFormDefault = (): React.ReactNode => {
  return <NameForm />;
};
