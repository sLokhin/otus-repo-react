import React from "react";
import { mount } from "enzyme";
import { NameForm } from "./NameForm";
import { AppContext } from "../App/App";

describe("NameForm test", () => {
  it("submit NameForm", () => {
    const onSubmit = jest.fn();
    const form = mount(<NameForm onSubmit={onSubmit} />, {
      wrappingComponent: AppContext.Provider,
      wrappingComponentProps: {
        value: [{}, () => null],
      },
    });

    form.find("input").simulate("change", {
      target: { value: "New Player" },
    });
    form.find("button").simulate("submit");
    expect(onSubmit).toHaveBeenCalled();
    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit.mock.calls[0][0]).toEqual("New Player");
  });
});
