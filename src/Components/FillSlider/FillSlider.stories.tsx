import React, { Component } from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { FillSlider } from "./FillSlider";
import { DEFAULT_SLIDER_PERCENT } from "../App/App";
export default {
  title: "Game of life / FillSlider",
  decorators: [withKnobs],
};

interface SliderWrapperStoryState {
  storyPercent: number;
}

class SliderWrapperStory extends Component<
  Record<string, unknown>,
  SliderWrapperStoryState
> {
  state = {
    storyPercent: DEFAULT_SLIDER_PERCENT,
  };

  setStoryPercent = (percent: number): void => {
    this.setState({
      storyPercent: percent,
    });
  };

  setFilledPercent = (percent: number): void => {
    this.setStoryPercent(percent);
  };

  render(): React.ReactNode {
    const { storyPercent } = this.state;
    return (
      <FillSlider
        defaultPercent={DEFAULT_SLIDER_PERCENT}
        currentPercent={storyPercent}
        setFilledPercent={this.setFilledPercent}
      ></FillSlider>
    );
  }
}

export const fillSliderDefault = (): React.ReactNode => {
  return <SliderWrapperStory></SliderWrapperStory>;
};
