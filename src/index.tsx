import React from "react";
import { render } from "react-dom";

import { MainScreen } from "./lesson8/components/MainScreen";
import { ErrorBoundary } from "./lesson8/components/ErrorBoundary";

render(
  <ErrorBoundary>
    <MainScreen />
  </ErrorBoundary>,
  document.getElementById("root")
);
