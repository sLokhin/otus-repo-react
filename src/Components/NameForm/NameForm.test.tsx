import React from "react";
import { mount } from "enzyme";
import { NameForm } from "./NameForm";

describe("NameForm test", () => {
  it("submit NameForm", () => {
    const testName = "New Player";
    const onSubmit = jest.fn();
    const form = mount(<NameForm onSubmit={onSubmit} />);

    form.find("input").simulate("change", {
      target: { value: testName },
    });
    form.find("button").simulate("submit");
    expect(onSubmit).toHaveBeenCalled();
    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit.mock.calls[0][0]).toEqual(testName);
  });
});
