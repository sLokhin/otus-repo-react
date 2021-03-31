import React, { FC, useContext, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { LoginPage } from "../Pages/LoginPage";
import { GamePage } from "../Pages/GamePage";
import { AuthRoute } from "./AuthRoute";
import { AppContext } from "../Components/App/App";
import { Loader } from "../Components/Loader/Loader";
import { getPlayerName, isLoggedIn } from "../API/auth";
import * as actionTypes from "../API/actionTypes";

export const Routes: FC = () => {
  const [state, dispatch] = useContext(AppContext);
  const { isAuth, isLoading } = state;
  console.log("STATE  ", state);
  useEffect(() => {
    (async () => {
      const isLogged = await isLoggedIn();
      const name = getPlayerName();
      if (isLogged) {
        dispatch({ type: actionTypes.LOGIN, payload: { name } });
      } else {
        dispatch({ type: actionTypes.LOGOUT });
      }
      dispatch({ type: actionTypes.LOADING_END });
    })();
  }, []);

  console.log("RENDERING...  ", isAuth, isLoading, state.name);
  return isLoading ? (
    <Loader />
  ) : (
    <Switch>
      <AuthRoute criterion={isAuth} path="/" alterPath="/login" exact>
        <GamePage />
      </AuthRoute>
      <AuthRoute criterion={!isAuth} path="/login" alterPath="/" exact>
        <LoginPage />
      </AuthRoute>
      <Route path="*">
        <Redirect to="/"></Redirect>
      </Route>
    </Switch>
  );
};
