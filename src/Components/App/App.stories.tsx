import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { App } from "./App";
export default {
  title: "Game of life / App",
  decorators: [withKnobs],
};

export const appDefault = (): React.ReactNode => {
  return <App />;
};
