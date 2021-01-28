import React from "react";
import { mount, render } from "enzyme";
import { Pixel, getPixel } from "./Pixel";

describe("Single Pixel: JSX version", () => {
  it("render default pixel", () => {
    expect(render(getPixel({ onClick: () => null })).text()).toEqual("Not clicked yet");
  });

  it("passed onClick inside Pixel", () => {
    const onClick = jest.fn();
    const pixel = mount(
      getPixel({
        onClick
      })
    );
    pixel.simulate("click");
    expect(onClick).toHaveBeenCalled();
  });
});
