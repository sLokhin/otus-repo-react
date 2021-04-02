import React, { FC } from "react";
import { Route, Redirect } from "react-router-dom";

interface AuthRouteProps {
  criterion: boolean;
  path: string;
  alterPath: string;
  exact: boolean;
  children: React.ReactNode;
}

export const AuthRoute: FC<AuthRouteProps> = (props: AuthRouteProps) => {
  const { criterion, path, alterPath, exact, children } = props;
  return (
    <Route
      path={path}
      exact={exact}
      render={() => (criterion ? children : <Redirect to={alterPath} />)}
    ></Route>
  );
};
