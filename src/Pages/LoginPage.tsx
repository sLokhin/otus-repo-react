import React, { FC } from "react";
import { NameForm } from "../Components/NameForm/NameForm";
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
  return (
    <LoginLayout>
      <NameForm />
    </LoginLayout>
  );
};
