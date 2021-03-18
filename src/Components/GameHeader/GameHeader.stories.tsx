import React, { useState } from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { GameHeader } from "./GameHeader";
export default {
  title: "Game of life / GameHeader",
  decorators: [withKnobs],
};

// export const GameHeaderDefault = (): React.ReactNode => {
//   const [isLoggedIn, onLogout] = useState(true);
//   return <GameHeader onLogout={onLogout} />;
// };
