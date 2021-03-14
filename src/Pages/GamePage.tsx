import React, { FC } from "react";
import { Game } from "../Components/Game/Game";
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
  return (
    <GameLayout>
      <Game />
    </GameLayout>
  );
};
