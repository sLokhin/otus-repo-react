import React from "react";
import { render } from "react-dom";

import { PixelField } from "./PixelField";

render(
  <PixelField
    pixelMass={[
      ["1", "1", "1"],
      ["0", "1", "0"],
    ]}
  />,
  document.getElementById("root")
);
