import React, { FC, Fragment, useContext, useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { LoginPage } from "../Pages/LoginPage";
import { GamePage } from "../Pages/GamePage";
import { MainRoute } from "./MainRoute";
import { LoginRoute } from "./LoginRoute";
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
  return (
    <Fragment>
      {isLoading ? (
        <Loader />
      ) : (
        <BrowserRouter>
          <Switch>
            <MainRoute isAuth={isAuth} path="/" exact>
              <GamePage />
            </MainRoute>
            <LoginRoute isAuth={isAuth} path="/login" exact>
              <LoginPage />
            </LoginRoute>
            <Route path="*">
              <Redirect to="/"></Redirect>
            </Route>
          </Switch>
        </BrowserRouter>
      )}
    </Fragment>
  );
};
