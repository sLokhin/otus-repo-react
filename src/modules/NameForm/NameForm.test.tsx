import React from "react";
import { Provider } from "react-redux";
import { mount } from "enzyme";
import { NameForm } from "./NameForm";
import { store } from "@/redux/store";

describe("NameForm test", () => {
  it("submit NameForm", () => {
    const testName = "New Player";
    const onSubmit = jest.fn();

    const form = mount(
      <Provider store={store}>
        <NameForm onSubmit={onSubmit} />
      </Provider>
    );

    form.find("input").simulate("change", {
      target: { value: testName },
    });
    form.find("button").simulate("submit");
    expect(onSubmit).toHaveBeenCalled();
    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit.mock.calls[0][0]).toEqual(testName);
  });
});
