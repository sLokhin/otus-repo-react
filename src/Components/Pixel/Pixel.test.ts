import React from "react";
import { mount, render } from "enzyme";
import { getPixel } from "./Pixel";

[
  {
    fn: getPixel,
    title: "JSX version",
  },
].forEach((item) => {
  const getPixel = item.fn;
  describe(`Single Pixel: ${item.title}`, () => {
    it("render default pixel", () => {
      expect(render(getPixel({})).text()).toEqual("Not clicked yet");
    });
  });
});
