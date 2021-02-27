import React, { FC } from "react";
import { Pixel } from "../Pixel/Pixel";
import styled from "@emotion/styled";

const PixelRow = styled.div`
  display: flex;
`;

interface PixelFieldProps {
  pixelStatesMatrix: boolean[][];
  onPixelClick: (coordX: number, coordY: number, newFlag: boolean) => void;
}

export const PixelField: FC<PixelFieldProps> = (props: PixelFieldProps) => {
  const { pixelStatesMatrix, onPixelClick } = props;
  return (
    <div
      className="pixel-field"
      style={{ display: "inline-block", border: "2px solid #1a1a1a" }}
    >
      {pixelStatesMatrix.map((row: boolean[], x: number) => {
        return (
          <PixelRow className="pixel-row" key={`row-${x}`}>
            {row.map(
              (filled: boolean, y: number): React.ReactNode => {
                return (
                  <Pixel
                    key={`${x}-${y}`}
                    filled={filled}
                    x={x}
                    y={y}
                    onClick={onPixelClick}
                  />
                );
              }
            )}
          </PixelRow>
        );
      })}
    </div>
  );
};
