import React, { FC } from "react";

interface IPixel {
  filled?: string;
  x?: number;
  y?: number;
  clicked?: boolean;
  onClick: (x: number, y: number) => void;
}

export const Pixel: FC<IPixel> = ({
  filled = "0",
  x = 0,
  y = 0,
  clicked = false,
  onClick,
}) => {
  return (
    <button
      className="pixel"
      style={{
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        width: "120px",
        height: "50px",
        backgroundColor: `${filled === "1" ? "green" : "red"}`,
        margin: "2px 2px",
        textAlign: "center",
      }}
      onClick={() => onClick(x || 0, y || 0)}
    >
      {clicked ? `coords: ${x}-${y}` : "Not clicked yet"}
    </button>
  );
};
