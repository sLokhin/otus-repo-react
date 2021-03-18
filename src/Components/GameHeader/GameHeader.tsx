import React, { FC, useContext } from "react";
import { AppContext } from "../App/App";

import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import styled from "@emotion/styled";

const GameHeaderWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  padding: 0px 120px;
  background-color: #2196f3;
`;

const RightSide = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const IconWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  &:hover {
    cursor: pointer;
  }
`;

const LabelWrapper = styled.div`
  margin-right: 15px;
  font-size: 20px;
  text-align: left;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  color: white;
`;

interface GameHeaderProps {
  onLogout: () => void;
}

export const GameHeader: FC<GameHeaderProps> = (props: GameHeaderProps) => {
  const [state] = useContext(AppContext);
  const { name } = state;
  const { onLogout } = props;
  return (
    <GameHeaderWrapper>
      <RightSide>
        <LabelWrapper>{name}</LabelWrapper>
        <IconWrapper onClick={onLogout}>
          <ExitToAppIcon style={{ color: "white" }} />
        </IconWrapper>
      </RightSide>
    </GameHeaderWrapper>
  );
};
