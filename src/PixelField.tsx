import React, { FC } from "react";
import { Pixel } from "./Pixel";

interface IPixelFieldProps {
  pixelMass: string[][];
  onClick: (x: number, y: number) => void;
}

export const PixelField: FC<IPixelFieldProps> = ({
  pixelMass,
  onClick,
}) => (
  <div
    className="pixel-field"
    style={{ display: "inline-block", border: "2px solid #1a1a1a" }}
  >
    {pixelMass.map((row, y) => [
      ...row.map((filled: string, x) => {
        return <Pixel key={`${x}-${y}`} filled={filled} x={x} y={y} onClick={onClick} />;
      }),
      y !== row.length - 1 ? <br key={y} /> : null,
    ])}
  </div>
);
