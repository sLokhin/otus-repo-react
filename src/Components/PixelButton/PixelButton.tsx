import React, { FC } from "react";

interface IPixelButtonProps {
  filled?: string;
  onClick: () => void;
  children?: string;
}

export const PixelButton: FC<IPixelButtonProps> = ({
  filled = "0",
  onClick,
  children = "No description",
}) => {
  return (
    <button
      className="pixel"
      style={{
        width: "120px",
        height: "50px",
        backgroundColor: `${filled === "1" ? "grey" : "gainsboro"}`,
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const getPixelButton = (props: IPixelButtonProps) => (
  <PixelButton {...props} />
);
