import React, { FC } from "react";
import { Pixel } from "./Pixel";

interface IPixelFieldProps {
  pixelMass: string[][];
  clickCounter?: number;
}

export const PixelField: FC<IPixelFieldProps> = ({
  pixelMass,
  clickCounter = 0,
}) => (
  <div
    className="pixel-field"
    style={{ display: "inline-block", border: "2px solid #1a1a1a" }}
  >
    {pixelMass.map((row, y) => [
      ...row.map((filled: string, x) => {
        return <Pixel key={`${x}-${y}`} filled={filled} x={x} y={y} />;
      }),
      y !== row.length - 1 ? <br key={y} /> : null,
    ])}
  </div>
);
