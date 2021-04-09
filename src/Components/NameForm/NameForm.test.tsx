import React from "react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { mount } from "enzyme";
import { NameForm } from "./NameForm";

import { defaultState as authDefaultState } from "./reducer";

const mockStore = configureMockStore([thunk]);

describe("NameForm test", () => {
  it("submit NameForm", () => {
    const testName = "New Player";
    const onSubmit = jest.fn();
    const form = mount(<NameForm onSubmit={onSubmit} />, {
      wrappingComponent: Provider,
      wrappingComponentProps: {
        store: mockStore({
          loadingState: { isLoading: false },
          loginState: { ...authDefaultState },
        }),
      },
    });

    form.find("input").simulate("change", {
      target: { value: testName },
    });
    form.find("button").simulate("submit");
    expect(onSubmit).toHaveBeenCalled();
    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit.mock.calls[0][0]).toEqual(testName);
  });
});
