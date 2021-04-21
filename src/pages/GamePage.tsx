import React, { FC, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { GameHeader } from "@/components/GameHeader/GameHeader";
import { Game } from "@/modules/Game/Game";
import { LOGOUT_ATTEMPT } from "@/modules/NameForm/reducer";
import { GameOfLifeState } from "@/redux/reducer";

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
    return state.authState;
  });

  const history = useHistory();

  useEffect(() => {
    (() => {
      history.push("/");
    })();
  }, []);

  const onLogout = async () => {
    dispatch({ type: LOGOUT_ATTEMPT });
  };
  return (
    <GameLayout>
      <GameHeader name={name} onLogout={onLogout} />
      <Game />
    </GameLayout>
  );
};
