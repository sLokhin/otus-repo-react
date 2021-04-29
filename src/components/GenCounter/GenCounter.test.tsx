import React from "react";
import { mount } from "enzyme";
import { GenCounter } from "./GenCounter";

describe("GenCounter test", () => {
  it("initial GenCounter", () => {
    const genCounter = mount(<GenCounter counter={0} />);
    expect(genCounter.text()).toEqual("Generation : 0");
  });
});
