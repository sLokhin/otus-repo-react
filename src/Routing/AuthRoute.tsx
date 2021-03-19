import React, { FC } from "react";
import { Route, Redirect } from "react-router-dom";

interface AuthFormProps {
  isAuth: boolean;
  path: string;
  children: React.ReactNode;
}

export const AuthRoute: FC<AuthFormProps> = (props: AuthFormProps) => {
  const { isAuth, path, children } = props;
  console.log("AUTH ROUTER...  ", isAuth);
  return (
    <Route
      path={path}
      exact
      render={() => (isAuth ? children : <Redirect to="/login" />)}
    ></Route>
  );
};
