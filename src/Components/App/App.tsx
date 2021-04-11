import React, { FC } from "react";
import { Provider } from "react-redux";
import { Routes } from "../../Routing/Routes";
import { BrowserRouter } from "react-router-dom";

import { store } from "../../Redux/store";

export const App: FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  );
};
