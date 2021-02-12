import React from "react";
import { render } from "react-dom";

import { PixelField } from "./Components/PixelField/PixelField";
import { NameForm } from "./Components/NameForm/NameForm";
import { GameControls } from "./Components/GameControls/GameControls";
import { GameOptions } from "./Components/GameOptions/GameOptions";

render(
  <React.Fragment>
    <NameForm></NameForm>
    <GameControls></GameControls>
    <GameOptions></GameOptions>
    <PixelField
      pixelMatrix={[
        ["1", "1", "1"],
        ["0", "1", "0"],
      ]}
    />
  </React.Fragment>,
  document.getElementById("root")
);
