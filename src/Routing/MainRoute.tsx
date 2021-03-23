import React, { FC } from "react";
import { Route, Redirect } from "react-router-dom";

interface MainRouteProps {
  isAuth: boolean;
  path: string;
  exact: boolean;
  children: React.ReactNode;
}

export const MainRoute: FC<MainRouteProps> = (props: MainRouteProps) => {
  console.log("GET NAME FROM MAIN ROUTE", localStorage.getItem("login"));
  const { isAuth, path, exact, children } = props;
  console.log("AUTH ROUTER...  ", isAuth);
  return (
    <Route
      path={path}
      exact={exact}
      render={() => (isAuth ? children : <Redirect to="/login" />)}
    ></Route>
  );
};
