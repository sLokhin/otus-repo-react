import React, { FC } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { LoginPage } from "../Pages/LoginPage";
import { GamePage } from "../Pages/GamePage";
import { AuthRoute } from "./AuthRoute";
import { Loader } from "../Components/Loader/Loader";

import { GameOfLifeState } from "../Redux/reducer";

export const Routes: FC = () => {
  const { isAuth } = useSelector((state: GameOfLifeState) => {
    return state.authState;
  });
  const isLoading = useSelector((state: GameOfLifeState) => {
    return state.loadingState;
  });

  return isLoading ? (
    <Loader />
  ) : (
    <Switch>
      <AuthRoute condition={isAuth} path="/" alterPath="/login" exact>
        <GamePage />
      </AuthRoute>
      <AuthRoute condition={!isAuth} path="/login" alterPath="/" exact>
        <LoginPage />
      </AuthRoute>
      <Route path="*">
        <Redirect to="/"></Redirect>
      </Route>
    </Switch>
  );
};
