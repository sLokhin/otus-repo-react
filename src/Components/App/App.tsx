import React, { FC, createContext, useContext } from "react";

import { GamePage } from "../../Pages/GamePage";
import { LoginPage } from "../../Pages/LoginPage";

const initialState = {
  name: "",
  isAuth: false,
};

export const AppContext = createContext(initialState);
export const App: FC = () => {
  const { isAuth } = useContext(AppContext);
  return (
    <AppContext.Provider value={initialState}>
      {isAuth ? <GamePage /> : <LoginPage />}
    </AppContext.Provider>
  );
};
