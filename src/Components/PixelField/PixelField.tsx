import React, { FC } from "react";
import { Pixel } from "../Pixel/Pixel";

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
      {pixelStatesMatrix.reduce(
        (
          result: Array<React.ReactNode[] | React.ReactNode>,
          row: boolean[],
          x: number
        ): Array<React.ReactNode[] | React.ReactNode> => {
          result.push(
            row.map(
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
            ),
            <br key={x} />
          );
          return result;
        },
        [] as Array<React.ReactNode[] | React.ReactNode>
      )}
    </div>
  );
};
