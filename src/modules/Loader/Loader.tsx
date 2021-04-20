import React, { FC } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

import styled from "@emotion/styled";

export const LoaderLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vh;
  height: 100vh;
  margin: auto;
  justify-content: center;
  align-items: center;
`;

export const LoaderLabel = styled.div`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-size: 24px;
  margin-top: 40px;
  user-select: none;
`;

export const Loader: FC = () => {
  return (
    <LoaderLayout>
      <CircularProgress />
      <LoaderLabel>{"... LOADING ..."}</LoaderLabel>
    </LoaderLayout>
  );
};
