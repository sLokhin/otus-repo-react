import React from "react";
import { mount } from "enzyme";
import { PixelButton } from "./PixelButton";

describe("Single PixelButton: JSX version", () => {
  it("render default pixel button", () => {
    expect(mount(<PixelButton onClick={jest.fn()} />).text()).toEqual(
      "No description"
    );
  });

  it("render filled pixelButton", () => {
    expect(mount(<PixelButton filled="1" onClick={jest.fn()} />).text()).toBe(
      "No description"
    );
  });

  it("calls onClick callback on default pixelButton", () => {
    const onClick = jest.fn();
    const wrapper = mount(<PixelButton onClick={onClick} />);
    wrapper.simulate("click");
    expect(onClick).toHaveBeenCalled();
  });
});
