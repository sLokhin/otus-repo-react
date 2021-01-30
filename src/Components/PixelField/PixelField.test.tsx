import React from "react";
import { mount } from "enzyme";
import { PixelField } from "./PixelField";

describe("PixelField: JSX version", () => {
  it("render empty field", () => {
    const field = mount(
      <PixelField
        pixelMatrix={[
          ["0", "0", "0"],
          ["0", "0", "0"],
          ["0", "0", "0"],
        ]}
      />
    );
    expect(field.find("br").length).toBe(3);
    expect(field.find(".pixel-wrapper").length).toBe(9);
    expect(field.find(".pixel").length).toBe(9);
  });

  it("render common field", () => {
    const field = mount(
      <PixelField
        pixelMatrix={[
          ["1", "1", "1"],
          ["0", "1", "0"],
        ]}
      />
    );
    expect(field.find("br").length).toBe(2);
    expect(field.find(".pixel-wrapper").length).toBe(6);
    expect(field.find(".pixel").length).toBe(6);
    expect(
      field.findWhere((el) => {
        return el.html() === "Not clicked yet" && typeof el.type() !== "string";
      }).length
    ).toBe(6);
  });

  it("test getNewClickedStatesMatrix function", () => {
    const { getNewClickedStatesMatrix } = PixelField.prototype;
    expect(
      getNewClickedStatesMatrix(0, 0, true, [[false, false, false]])
    ).toMatchObject([[true, false, false]]);
    expect(
      getNewClickedStatesMatrix(0, 2, true, [[false, false, false]])
    ).toMatchObject([[false, false, true]]);
    expect(
      getNewClickedStatesMatrix(0, 0, false, [[true, true, true]])
    ).toMatchObject([[false, true, true]]);
    expect(
      getNewClickedStatesMatrix(0, 2, false, [[true, true, true]])
    ).toMatchObject([[true, true, false]]);
    expect(
      getNewClickedStatesMatrix(999, 999, true, [[false, false, false]])
    ).toMatchObject([[false, false, false]]);
    expect(
      getNewClickedStatesMatrix(1, 1, true, [
        [false, false],
        [false, false],
      ])
    ).toMatchObject([
      [false, false],
      [false, true],
    ]);
  });
});
