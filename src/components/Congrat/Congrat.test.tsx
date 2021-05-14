import React from "react";
import { mount } from "enzyme";
import { Congrat } from "./Congrat";

describe("Congrat test", () => {
  it("success Congrat", () => {
    const congrat = mount(<Congrat success={true} />);
    expect(congrat.text()).toEqual("Congratulations !!! New Ecosystem !!!");
  });

  it("failure Congrat", () => {
    const congrat = mount(<Congrat success={false} />);
    expect(congrat.text()).toEqual("Oh No !!! Nobody Survived !!!");
  });
});
