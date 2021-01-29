import React from "react";
import { mount, render } from "enzyme";
import { Pixel } from "./Pixel";

describe("Single Pixel: JSX version", () => {
  it("render default pixel", () => {
    const onClick = jest.fn();
    expect(render(<Pixel onClick={onClick} />).text()).toEqual(
      "Not clicked yet"
    );
  });

  it("passed onClick inside Pixel", () => {
    const onClick = jest.fn();
    const pixel = mount(<Pixel onClick={onClick} />);
    pixel.find(".pixel").at(0).simulate("click");
    expect(onClick).toHaveBeenCalled();
  });
});
