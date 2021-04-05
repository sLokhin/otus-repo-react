import React, { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { Game } from "../Components/Game/Game";
import { GameHeader } from "../Components/GameHeader/GameHeader";
import { logout } from "../API/auth";
import { useHistory } from "react-router-dom";

import { store } from "../Redux/store";
import { GameOfLifeState } from "../Redux/reducer";
import * as actionTypes from "../Redux/types";

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
  const { name } = useSelector((state: GameOfLifeState) => {
    return {
      name: state.name,
    };
  });

  const history = useHistory();

  useEffect(() => {
    (() => {
      history.push("/");
    })();
  }, []);

  const onLogout = async () => {
    store.dispatch({ type: actionTypes.LOADING_START });
    await logout();
    store.dispatch({ type: actionTypes.LOGOUT });
  };
  return (
    <GameLayout>
      <GameHeader name={name} onLogout={onLogout} />
      <Game />
    </GameLayout>
  );
};
