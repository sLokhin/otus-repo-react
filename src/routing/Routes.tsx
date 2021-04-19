import React, { FC } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { LoginPage } from "@/pages/LoginPage";
import { GamePage } from "@/pages/GamePage";
import { AuthRoute } from "./AuthRoute";
import { Loader } from "@/modules/Loader/Loader";

import { GameOfLifeState } from "@/redux/reducer";

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
