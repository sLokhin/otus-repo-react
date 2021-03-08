import React from "react";
import { mount } from "enzyme";
import { PixelField } from "./PixelField";

describe("PixelField test", () => {
  it("render empty field", () => {
    const onPixelClick = jest.fn();
    const field = mount(
      <PixelField
        pixelStatesMatrix={[
          [false, false, false],
          [false, false, false],
          [false, false, false],
        ]}
        onPixelClick={onPixelClick}
      />
    );
    expect(field.find("Pixel").length).toBe(9);
  });

  it("click Pixel test", () => {
    const onPixelClick = jest.fn();
    const field = mount(
      <PixelField
        pixelStatesMatrix={[
          [false, false, false],
          [false, false, false],
          [false, false, false],
        ]}
        onPixelClick={onPixelClick}
      />
    );
    field.find("Pixel").at(2).simulate("click");
    expect(onPixelClick).toHaveBeenCalled();
    expect(onPixelClick).toHaveBeenCalledTimes(1);
    expect(onPixelClick.mock.calls[0]).toMatchObject([0, 2, true]);
  });
});
