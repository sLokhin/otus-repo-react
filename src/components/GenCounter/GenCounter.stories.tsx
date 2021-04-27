import React from "react";
import { withKnobs, number } from "@storybook/addon-knobs";
import { GenCounter } from "./GenCounter";
export default {
  title: "Game of life / GenCounter",
  decorators: [withKnobs],
};

export const genCounterDefault = (): React.ReactNode => {
  return <GenCounter counter={number("counter", 123)} />;
};
