import React from "react";
import { mount } from "enzyme";
import { Pixel } from "./Pixel";

describe("Pixel test", () => {
  it("passed onClick inside Pixel", () => {
    const onClick = jest.fn();
    const pixel = mount(<Pixel filled={false} x={0} y={0} onClick={onClick} />);
    pixel.find(".pixel").at(0).simulate("click");
    expect(onClick).toHaveBeenCalled();
  });

  it("passed onClick inside Pixel with x = 9 y = 8", () => {
    const onClick = jest.fn();
    const x = 9;
    const y = 8;
    const pixel = mount(<Pixel filled={false} x={x} y={y} onClick={onClick} />);
    pixel.find(".pixel").at(0).simulate("click");
    expect(onClick).toHaveBeenCalledWith(x, y, true);
  });
});
