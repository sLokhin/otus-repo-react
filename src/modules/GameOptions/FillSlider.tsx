import React, { FC } from "react";
import { Slider, Tooltip } from "@material-ui/core";
import styled from "@emotion/styled";

const SliderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 20px auto 0px;
  width: 100%;
`;

type LabelProps = { disabled: boolean };

const LabelWrapper = styled.div<LabelProps>((props: LabelProps) => ({
  fontFamily: `${'"Roboto", "Helvetica", "Arial", sans-serif'}`,
  width: "100%",
  fontSize: "20px",
  textAlign: "left",
  marginBottom: "10px",
  fontWeight: "bold",
  color: props.disabled ? "rgba(0, 0, 0, 0.26)" : "#2f42d0",
}));

interface FillSliderProps {
  currentPercent: number;
  defaultPercent: number;
  disabled?: boolean;
  setFilledPercent: (percent: number) => void;
}

interface TooltipProps {
  children: React.ReactElement;
  open: boolean;
  value: number;
}

function ValueLabelComponent(props: TooltipProps) {
  const { children, open, value } = props;
  return (
    <Tooltip open={open} enterTouchDelay={0} placement="bottom" title={value}>
      {children}
    </Tooltip>
  );
}

export const FillSlider: FC<FillSliderProps> = (props: FillSliderProps) => {
  const {
    currentPercent,
    defaultPercent,
    disabled = false,
    setFilledPercent,
  } = props;
  const changePercent = (
    event: React.ChangeEvent<Record<string, unknown>>,
    newValue: number | number[]
  ): void => {
    const percent = Array.isArray(newValue) ? newValue[0] : newValue;
    setFilledPercent(percent);
  };

  return (
    <SliderWrapper>
      <LabelWrapper disabled={disabled}>Field filled percent:</LabelWrapper>
      <Slider
        ValueLabelComponent={ValueLabelComponent}
        value={currentPercent}
        defaultValue={defaultPercent}
        disabled={disabled}
        onChange={changePercent}
      />
    </SliderWrapper>
  );
};
