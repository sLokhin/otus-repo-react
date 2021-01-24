import React, { FC } from "react";

interface PixelFieldProps {
  pixelMass: string[][];
  clickCounter?: number;
  onClick: () => void;
}

export const PixelField: FC<PixelFieldProps> = ({ pixelMass, clickCounter = 0, onClick }) => (
  <div className="pixel-field" style={{width: '500px', height: '300px', border : '2px solid #1a1a1a'}}>This is Pixel Field</div>
);
