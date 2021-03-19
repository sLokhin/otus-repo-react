import React, { FC, Fragment, useContext, useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { LoginPage } from "../Pages/LoginPage";
import { GamePage } from "../Pages/GamePage";
import { AuthRoute } from "./AuthRoute";
import { AppContext } from "../Components/App/App";
import { getPlayerName, isLoggedIn } from "../API/auth";

export const Routes: FC = () => {
  const [state, dispatch] = useContext(AppContext);
  const { isAuth, isLoading } = state;
  console.log("STATE  ", state);

  useEffect(() => {
    (async () => {
      dispatch({ type: "LOADING_START" });
      const isLogged = await isLoggedIn();
      const name = getPlayerName();
      if (isLogged) {
        dispatch({ type: "LOGIN", name: name });
      } else {
        dispatch({ type: "LOGOUT" });
      }
      dispatch({ type: "LOADING_END" });
    })();
  }, []);

  console.log("RENDERING...  ", isAuth, isLoading);
  return (
    <Fragment>
      {isLoading ? (
        <div>{"... IS LOADING ..."}</div>
      ) : (
        <BrowserRouter>
          <Switch>
            <AuthRoute isAuth={isAuth} path="/">
              <GamePage />
            </AuthRoute>
            <Route path="/login" exact>
              <LoginPage />
            </Route>
            <Redirect to="/"></Redirect>
          </Switch>
        </BrowserRouter>
      )}
    </Fragment>
  );
};
