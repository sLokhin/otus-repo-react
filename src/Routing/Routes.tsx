import React, { FC, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { LoginPage } from "../Pages/LoginPage";
import { GamePage } from "../Pages/GamePage";
import { AuthRoute } from "./AuthRoute";
import { Loader } from "../Components/Loader/Loader";
import { getPlayerName, isLoggedIn } from "../API/auth";

import { GameOfLifeState } from "../Redux/reducer";
import * as actionTypes from "../Components/NameForm/types";

export const Routes: FC = () => {
  const dispatch = useDispatch();
  const { isAuth, isLoading } = useSelector((state: GameOfLifeState) => {
    return state.loginState;
  });

  useEffect(() => {
    (async () => {
      const isLogged = await isLoggedIn();
      const name = getPlayerName();
      if (isLogged) {
        dispatch({
          type: actionTypes.LOGIN,
          payload: { name },
        });
      } else {
        dispatch({
          type: actionTypes.LOGOUT,
        });
      }
      dispatch({
        type: actionTypes.LOADING_END,
      });
    })();
  }, []);

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
