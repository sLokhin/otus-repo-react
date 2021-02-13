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

interface IFillSliderProps {
  setFilledPercent: (options: { percent: number }) => void;
  defaultPercent: number;
}

interface IFillSliderState {
  percent: number;
}

interface ITooltipProps {
  children: React.ReactElement;
  open: boolean;
  value: number;
}

function ValueLabelComponent(props: ITooltipProps) {
  const { children, open, value } = props;
  return (
    <Tooltip open={open} enterTouchDelay={0} placement="bottom" title={value}>
      {children}
    </Tooltip>
  );
}

export class FillSlider extends React.Component<
  IFillSliderProps,
  IFillSliderState
> {
  static defaultProps: IFillSliderProps = {
    setFilledPercent: (options): void => {
      console.log("setFilledPercent", `percent - ${options.percent}`);
    },
    defaultPercent: 30,
  };

  state = {
    percent: this.props.defaultPercent,
  } as IFillSliderState;

  changePercent = (
    event: React.ChangeEvent<Record<string, unknown>>,
    newValue: number | number[]
  ): void => {
    const options = {
      percent: newValue as number,
    };
    this.setState(options);
    this.props.setFilledPercent(options);
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
          defaultValue={this.props.defaultPercent}
        />
      </SliderWrapper>
    );
  }
}
