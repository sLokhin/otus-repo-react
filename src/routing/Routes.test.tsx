import React from "react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { mount } from "enzyme";
import { Routes } from "./Routes";

import { MemoryRouter } from "react-router";

import { LoginPage } from "@/pages/LoginPage";
import { GamePage } from "@/pages/GamePage";

import { authDefaultState } from "@/modules/NameForm/reducer";

const mockStore = configureMockStore([thunk]);
const mockHistory = { push: jest.fn() };
jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useHistory: () => mockHistory,
}));

jest.mock("../utils/delay", () => ({
  delay: jest.fn(() => {
    return Promise.resolve();
  }),
}));

jest.spyOn(React, "useEffect").mockImplementation((f) => f());

jest.mock("../api/auth", () => ({
  executeLogin: jest.fn(() => {
    return null;
  }),
  executeLogout: jest.fn(() => {
    return null;
  }),
  isLoggedIn: jest.fn(() => {
    return null;
  }),
  getPlayerName: jest.fn(() => {
    return null;
  }),
}));

const delayFromTest = jest.fn(() => new Promise((r) => setTimeout(r, 50)));

describe("App routing test", () => {
  it("initial route", async () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/"]}>
        <Routes />
      </MemoryRouter>,
      {
        wrappingComponent: Provider,
        wrappingComponentProps: {
          store: mockStore({
            loadingState: false,
            authState: { ...authDefaultState },
          }),
        },
      }
    );
    await delayFromTest();
    expect(wrapper.find(LoginPage)).toHaveLength(1);
    expect(mockHistory.push).toHaveBeenCalledWith("/login");
  });

  it("initial route but with some random url", async () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/some-random-page:123"]}>
        <Routes />
      </MemoryRouter>,
      {
        wrappingComponent: Provider,
        wrappingComponentProps: {
          store: mockStore({
            loadingState: false,
            authState: { ...authDefaultState },
          }),
        },
      }
    );
    await delayFromTest();
    expect(wrapper.find(LoginPage)).toHaveLength(1);
    expect(mockHistory.push).toHaveBeenCalledWith("/login");
  });

  it("authorized route", async () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/"]}>
        <Routes />
      </MemoryRouter>,
      {
        wrappingComponent: Provider,
        wrappingComponentProps: {
          store: mockStore({
            loadingState: false,
            authState: { ...authDefaultState, isAuth: true },
          }),
        },
      }
    );
    await delayFromTest();
    expect(wrapper.find(GamePage)).toHaveLength(1);
    expect(mockHistory.push).toHaveBeenCalledWith("/");
  });

  it("authorized route but redirected from login", async () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/login"]}>
        <Routes />
      </MemoryRouter>,
      {
        wrappingComponent: Provider,
        wrappingComponentProps: {
          store: mockStore({
            loadingState: false,
            authState: { ...authDefaultState, isAuth: true },
          }),
        },
      }
    );
    await delayFromTest();
    expect(wrapper.find(GamePage)).toHaveLength(1);
    expect(mockHistory.push).toHaveBeenCalledWith("/");
  });
});
