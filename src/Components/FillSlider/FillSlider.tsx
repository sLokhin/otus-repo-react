import React from "react";
import { Slider, Tooltip } from "@material-ui/core";
import styled from "@emotion/styled";

const SliderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 20px auto 0px;
  width: 400px;
`;

const LabelWrapper = styled.div`
  width: 100%;
  font-size: 24px;
  text-align: left;
  margin-bottom: 10px;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: bold;
  color: #2f42d0;
`;

interface FillSliderProps {
  setFilledPercent?: (options: { percent: number }) => void;
  defaultPercent?: number;
}

interface FillSliderState {
  percent: number;
}

interface TooltipProps {
  children: React.ReactElement;
  open: boolean;
  value: number;
}

type AllPropsRequired<T> = {
  [Property in keyof T]-?: T[Property];
};

function ValueLabelComponent(props: TooltipProps) {
  const { children, open, value } = props;
  return (
    <Tooltip open={open} enterTouchDelay={0} placement="bottom" title={value}>
      {children}
    </Tooltip>
  );
}

export class FillSlider extends React.Component<
  FillSliderProps,
  FillSliderState
> {
  private args: AllPropsRequired<FillSliderProps> = {
    ...this.props,
    setFilledPercent:
      this.props.setFilledPercent !== undefined
        ? this.props.setFilledPercent
        : (options): void => {
            console.log("setFilledPercent", `percent - ${options.percent}`);
          },
    defaultPercent: this.props.defaultPercent ? this.props.defaultPercent : 30,
  };

  state = {
    percent: this.args.defaultPercent,
  } as FillSliderState;

  changePercent = (
    event: React.ChangeEvent<Record<string, unknown>>,
    newValue: number | number[]
  ): void => {
    const options = {
      percent: Array.isArray(newValue) ? newValue[0] : newValue,
    };
    this.setState(options);
    this.args.setFilledPercent(options);
    console.log("changePercent", newValue);
  };

  render(): React.ReactNode {
    return (
      <SliderWrapper className={"slider-wrapper"}>
        <LabelWrapper className={"slider-label"}>
          Field filled percent:
        </LabelWrapper>
        <Slider
          ValueLabelComponent={ValueLabelComponent}
          onChange={this.changePercent}
          defaultValue={this.args.defaultPercent}
          name={"fill-percent-input"}
        />
      </SliderWrapper>
    );
  }
}
