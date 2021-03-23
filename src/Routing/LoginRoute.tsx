import React, { FC } from "react";
import { Route, Redirect } from "react-router-dom";

interface LoginRouteProps {
  isAuth: boolean;
  path: string;
  exact: boolean;
  children: React.ReactNode;
}

export const LoginRoute: FC<LoginRouteProps> = (props: LoginRouteProps) => {
  console.log("GET NAME FROM LOGIN ROUTE", localStorage.getItem("login"));
  const { isAuth, path, exact, children } = props;
  return (
    <Route
      path={path}
      exact={exact}
      render={() => (isAuth ? <Redirect to="/" /> : children)}
    ></Route>
  );
};
