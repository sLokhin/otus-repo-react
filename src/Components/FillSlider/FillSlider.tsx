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

const LabelWrapper = styled.div`
  width: 100%;
  font-size: 20px;
  text-align: left;
  margin-bottom: 10px;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: bold;
  color: #2f42d0;
`;

interface FillSliderProps {
  currentPercent: number;
  defaultPercent: number;
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
  const { currentPercent, defaultPercent, setFilledPercent } = props;
  const changePercent = (
    event: React.ChangeEvent<Record<string, unknown>>,
    newValue: number | number[]
  ): void => {
    const percent = Array.isArray(newValue) ? newValue[0] : newValue;
    setFilledPercent(percent);
  };

  return (
    <SliderWrapper className={"slider-wrapper"}>
      <LabelWrapper className={"slider-label"}>
        Field filled percent:
      </LabelWrapper>
      <Slider
        ValueLabelComponent={ValueLabelComponent}
        onChange={changePercent}
        value={currentPercent}
        defaultValue={defaultPercent}
        name={"fill-percent-input"}
      />
    </SliderWrapper>
  );
};
