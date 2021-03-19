import React, { FC, useContext } from "react";
import { Game } from "../Components/Game/Game";
import { GameHeader } from "../Components/GameHeader/GameHeader";
import { AppContext } from "../Components/App/App";
import styled from "@emotion/styled";
import { logout } from "../API/auth";

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
    await logout();
    dispatch({ type: "LOGOUT" });
  };
  return (
    <GameLayout>
      <GameHeader onLogout={onLogout} />
      <Game />
    </GameLayout>
  );
};
