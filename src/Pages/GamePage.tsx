import React, { FC, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Game } from "../Components/Game/Game";
import { GameHeader } from "../Components/GameHeader/GameHeader";
import { logout } from "../API/auth";
import { useHistory } from "react-router-dom";
import { GameOfLifeState } from "../Redux/reducer";
import * as actionTypes from "../Components/NameForm/types";

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
  const dispatch = useDispatch();
  const { name } = useSelector((state: GameOfLifeState) => {
    return state.loginState;
  });

  const history = useHistory();

  useEffect(() => {
    (() => {
      history.push("/");
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
