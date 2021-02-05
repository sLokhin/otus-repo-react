import React from "react";
import { render } from "react-dom";

import { PixelField } from "./Components/PixelField/PixelField";
import { MainScreen } from "./lesson8/MainScreen";

// render(
//   <PixelField
//     pixelMatrix={[
//       ["1", "1", "1"],
//       ["0", "1", "0"],
//     ]}
//   />,
//   document.getElementById("root")
// );

render(<MainScreen />, document.getElementById("root"));
