import React, { FC, useContext, useEffect } from "react";
import { Game } from "../Components/Game/Game";
import { GameHeader } from "../Components/GameHeader/GameHeader";
import { AppContext } from "../Components/App/App";
import { logout } from "../API/auth";
import { useHistory } from "react-router-dom";
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
  const { name } = state;
  const history = useHistory();

  useEffect(() => {
    (() => {
      history.push("/");
      console.log("HISTORY FROM GamePage...", history);
    })();
  }, []);

  const onLogout = async () => {
    dispatch({ type: actionTypes.LOADING_START });
    await logout();
    dispatch({ type: actionTypes.LOGOUT });
  };
  return (
    <GameLayout>
      <GameHeader name={name} onLogout={onLogout} />
      <Game />
    </GameLayout>
  );
};
