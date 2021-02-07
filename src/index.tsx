import React from "react";
import { render } from "react-dom";

import { MainScreen } from "./lesson8/MainScreen";
import { ErrorBoundary } from "./lesson8/ErrorBoundary";

render(
  <ErrorBoundary>
    <MainScreen />
  </ErrorBoundary>,
  document.getElementById("root")
);
