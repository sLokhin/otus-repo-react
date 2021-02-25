import React from "react";
import { mount } from "enzyme";
import { FillSlider } from "./FillSlider";
import { Slider } from "@material-ui/core";

describe("FillSlider test", () => {
  it("drag FillSlider", () => {
    const setFilledPercent = jest.fn();
    const fillSlider = mount(
      <FillSlider setFilledPercent={setFilledPercent} />
    );

    expect(
      fillSlider.find("input[name='fill-percent-input']").at(0).prop("value")
    ).toEqual("30");

    expect(fillSlider.find(Slider).length).toBe(1);

    const slider = fillSlider.find(Slider).at(0);

    slider.props().onChange!({} as React.ChangeEvent, 75);

    expect(setFilledPercent).toHaveBeenCalled();
    expect(setFilledPercent).toHaveBeenCalledTimes(1);
    expect(setFilledPercent.mock.calls[0][0]).toMatchObject({
      percent: 75,
    });
  });
});
