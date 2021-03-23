import React, { FC, Fragment, useContext, useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { LoginPage } from "../Pages/LoginPage";
import { GamePage } from "../Pages/GamePage";
import { MainRoute } from "./MainRoute";
import { LoginRoute } from "./LoginRoute";
import { AppContext } from "../Components/App/App";
import { getPlayerName, isLoggedIn } from "../API/auth";

export const Routes: FC = () => {
  const [state, dispatch] = useContext(AppContext);
  const { isAuth, isLoading } = state;
  console.log("STATE  ", state);

  useEffect(() => {
    console.log("USE EFFECT");
    (async () => {
      console.log("USE EFFECT EXECUTE");
      dispatch({ type: "LOADING_START" });
      const isLogged = await isLoggedIn();
      const name = getPlayerName();
      if (isLogged) {
        dispatch({ type: "LOGIN", payload: { name } });
      } else {
        dispatch({ type: "LOGOUT" });
      }
      dispatch({ type: "LOADING_END" });
    })();
  }, []);

  console.log("RENDERING...  ", isAuth, isLoading, state.name);
  return (
    <Fragment>
      {isLoading ? (
        <div>{"... IS LOADING ..."}</div>
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
