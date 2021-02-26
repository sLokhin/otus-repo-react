import React from "react";
import { render } from "react-dom";

import { PixelField } from "./Components/PixelField/PixelField";
import { NameForm } from "./Components/NameForm/NameForm";
import { GameControls } from "./Components/GameControls/GameControls";
import { GameOptions } from "./Components/GameOptions/GameOptions";
import { FillSlider } from "./Components/FillSlider/FillSlider";

render(
  <React.Fragment>
    <NameForm></NameForm>
    <GameControls></GameControls>
    <GameOptions></GameOptions>
    <FillSlider></FillSlider>
    <PixelField
      pixelMatrix={[
        [true, true, true],
        [false, true, false],
      ]}
    />
  </React.Fragment>,
  document.getElementById("root")
);
