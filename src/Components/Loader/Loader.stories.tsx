import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { Loader } from "./Loader";
export default {
  title: "Game of life / Loader",
  decorators: [withKnobs],
};

export const loaderDefault = (): React.ReactNode => {
  return <Loader />;
};
