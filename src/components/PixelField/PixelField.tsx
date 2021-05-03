import React, { FC } from "react";
import { Pixel } from "./Pixel";
import styled from "@emotion/styled";

type FieldProps = { disabled: boolean };

const Field = styled.div<FieldProps>((props: FieldProps) => ({
  display: "inline-block",
  border: "2px solid #1a1a1a",
  pointerEvents: props.disabled ? "none" : "auto",
}));

const Row = styled.div`
  display: flex;
`;

interface PixelFieldProps {
  pixelStatesMatrix: boolean[][];
  disabled?: boolean;
  onPixelClick: (coordX: number, coordY: number, newFlag: boolean) => void;
}

export const PixelField: FC<PixelFieldProps> = (props: PixelFieldProps) => {
  const { pixelStatesMatrix, disabled = false, onPixelClick } = props;
  return (
    <Field disabled={disabled}>
      {pixelStatesMatrix.map((row: boolean[], x: number) => {
        return (
          <Row key={`row-${x}`}>
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
          </Row>
        );
      })}
    </Field>
  );
};
