import React from "react";
import { mount, render } from "enzyme";
import { Pixel, getPixel } from "./Pixel";

describe("Single Pixel: JSX version", () => {
  it("render default pixel", () => {
    const onClick = jest.fn();
    expect(render(getPixel({ onClick: onClick })).text()).toEqual("Not clicked yet");
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

  // Malfunction code example

  // it("render default pixel", () => {
  //   const onClick = jest.fn();
  //   expect(render(<Pixel onClick={onClick}/>).text()).toEqual("Not clicked yet");
  //   });
  // });
});
