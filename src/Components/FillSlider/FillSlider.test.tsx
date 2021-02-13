import React from "react";
import { mount } from "enzyme";
import { FillSlider } from "./FillSlider";

describe("FillSlider test", () => {
  it("drag FillSlider", () => {
    const setFilledPercent = jest.fn();
    const fillSlider = mount(
      <FillSlider setFilledPercent={setFilledPercent} />
    );

    expect(
      fillSlider.find("input[name='fill-percent-input']").at(0).prop("value")
    ).toEqual("30");

    fillSlider
      .find("input[name='fill-percent-input']")
      .at(0)
      .simulate("change", { target: { value: 55 } });

    expect(setFilledPercent).toHaveBeenCalled();
    expect(setFilledPercent).toHaveBeenCalledTimes(1);
    expect(setFilledPercent.mock.calls[0][0]).toMatchObject({
      percent: 55,
    });

    expect(
      fillSlider.find("input[name='fill-percent-input']").at(0).prop("value")
    ).toEqual("55");
  });
});
