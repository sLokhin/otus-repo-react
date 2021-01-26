import React, { FC } from "react";
import { Pixel } from "../Pixel/Pixel";

interface IPixelFieldProps {
  pixelMass: string[][];
}

export const PixelField: FC<IPixelFieldProps> = ({ pixelMass }) => (
  <div
    className="pixel-field"
    style={{ display: "inline-block", border: "2px solid #1a1a1a" }}
  >
    {pixelMass.map((row, x) => [
      ...row.map((filled: string, y) => {
        return <Pixel key={`${x}-${y}`} filled={filled} x={x} y={y} />;
      }),
      <br key={x} />,
    ])}
  </div>
);

export const getPixelField = (props: IPixelFieldProps) => (
  <PixelField {...props} />
);
