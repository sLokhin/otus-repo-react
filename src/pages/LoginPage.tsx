import React, { FC, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { NameForm } from "@/modules/NameForm/NameForm";
import styled from "@emotion/styled";

const LoginLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vh;
  height: 100vh;
  margin: auto;
  justify-content: center;
  align-items: center;
`;

export const LoginPage: FC = () => {
  const history = useHistory();

  useEffect(() => {
    (() => {
      history.push("/login");
    })();
  }, []);

  return (
    <LoginLayout>
      <NameForm />
    </LoginLayout>
  );
};
