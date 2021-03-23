import React, { FC, useContext } from "react";
import { Game } from "../Components/Game/Game";
import { GameHeader } from "../Components/GameHeader/GameHeader";
import { AppContext } from "../Components/App/App";
import { logout } from "../API/auth";
import * as actionTypes from "../API/actionTypes";

import styled from "@emotion/styled";

const GameLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const GamePage: FC = () => {
  const [state, dispatch] = useContext(AppContext);
  const onLogout = async () => {
    dispatch({ type: actionTypes.LOADING_START });
    await logout();
    dispatch({ type: actionTypes.LOGOUT });
  };
  return (
    <GameLayout>
      <GameHeader onLogout={onLogout} />
      <Game />
    </GameLayout>
  );
};
