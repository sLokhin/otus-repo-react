import React from "react";
import { render } from "react-dom";

import { PixelField } from "./Components/PixelField/PixelField";

render(
  <PixelField
    pixelMass={[
      ["1", "1", "1"],
      ["0", "1", "0"],
    ]}
    onClick={(x, y) => { console.log("Pixel coordinates: ", x, y)}}
  />,
  document.getElementById("root")
);
