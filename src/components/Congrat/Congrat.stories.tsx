import React from "react";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import { Congrat } from "./Congrat";

export default {
  title: "Game of life / Congrat",
  decorators: [withKnobs],
};

export const congratOptional = (): React.ReactNode => {
  return <Congrat success={boolean("success", true)} />;
};
