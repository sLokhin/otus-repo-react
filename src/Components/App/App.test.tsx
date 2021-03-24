import React from "react";
import { mount } from "enzyme";
import { App, AppContext, initialState } from "./App";
import { Loader } from "../../Components/Loader/Loader";

import { MemoryRouter } from "react-router";

import { LoginPage } from "../../Pages/LoginPage";
import { GamePage } from "../../Pages/GamePage";

describe("App routing test", () => {
  it("initial route", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>,
      {
        wrappingComponent: AppContext.Provider,
        wrappingComponentProps: {
          value: [initialState, jest.fn()],
        },
      }
    );
    expect(wrapper.find(Loader)).toHaveLength(1);
  });
  it("initial route but with some random url", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/some-random-page:123"]}>
        <App />
      </MemoryRouter>,
      {
        wrappingComponent: AppContext.Provider,
        wrappingComponentProps: {
          value: [initialState, jest.fn()],
        },
      }
    );
    expect(wrapper.find(Loader)).toHaveLength(1);
  });
  it("authorized route", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>,
      {
        wrappingComponent: AppContext.Provider,
        wrappingComponentProps: {
          value: [
            { name: "Name from enzyme test", isAuth: true, isLoading: false },
            jest.fn(),
          ],
        },
      }
    );
    expect(wrapper.find(Loader)).toHaveLength(1);
  });
  it("authorized route but redirected from login", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/login"]}>
        <App />
      </MemoryRouter>,
      {
        wrappingComponent: AppContext.Provider,
        wrappingComponentProps: {
          value: [
            { name: "Name from enzyme test", isAuth: true, isLoading: false },
            jest.fn(),
          ],
        },
      }
    );
    expect(wrapper.find(Loader)).toHaveLength(1);
  });
});
