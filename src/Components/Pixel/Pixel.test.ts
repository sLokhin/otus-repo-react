import React from "react";
import { mount, render } from "enzyme";
import { Pixel, getPixel } from "./Pixel";

describe("Single Pixel: JSX version", () => {
  it("render default pixel", () => {
    expect(render(getPixel({})).text()).toEqual("Not clicked yet");
  });
});
