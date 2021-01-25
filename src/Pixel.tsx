import React, { FC } from "react";

interface IPixel {
  filled?: string;
  x?: number;
  y?: number;
  clicked?: boolean;
}

export const Pixel: FC<IPixel> = ({
  filled = "0",
  x = 0,
  y = 0,
  clicked = false,
}) => {
  return (
    <span
      className="pixel"
      style={{
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        width: "120px",
        height: "50px",
        border: "2px solid",
        borderColor: `${filled === "1" ? "green" : "red"}`,
        margin: "2px 2px",
        textAlign: "center",
      }}
    >
      {clicked ? `coords: ${x}-${y}` : "Not clicked yet"}
    </span>
  );
};
