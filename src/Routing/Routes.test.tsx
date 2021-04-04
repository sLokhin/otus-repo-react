import React from "react";
import { mount } from "enzyme";
import { AppContext, initialState } from "../Components/App/App";
import { Routes } from "./Routes";

import { MemoryRouter } from "react-router";

import { LoginPage } from "../Pages/LoginPage";
import { GamePage } from "../Pages/GamePage";

const mockHistory = { push: jest.fn() };
jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useHistory: () => mockHistory,
}));

jest.mock("../Utils/delay", () => ({
  delay: jest.fn(() => {
    return Promise.resolve();
  }),
}));

jest.spyOn(React, "useEffect").mockImplementation((f) => f());

jest.mock("../API/auth", () => ({
  login: jest.fn(() => {
    return null;
  }),
  logout: jest.fn(() => {
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
        wrappingComponent: AppContext.Provider,
        wrappingComponentProps: {
          value: [{ ...initialState, isLoading: false }, jest.fn()],
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
        wrappingComponent: AppContext.Provider,
        wrappingComponentProps: {
          value: [{ ...initialState, isLoading: false }, jest.fn()],
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
        wrappingComponent: AppContext.Provider,
        wrappingComponentProps: {
          value: [
            {
              name: "Name from enzyme test - 000",
              isAuth: true,
              isLoading: false,
            },
            jest.fn(),
          ],
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
        wrappingComponent: AppContext.Provider,
        wrappingComponentProps: {
          value: [
            {
              name: "Name from enzyme test - 555",
              isAuth: true,
              isLoading: false,
            },
            jest.fn(),
          ],
        },
      }
    );
    await delayFromTest();
    expect(wrapper.find(GamePage)).toHaveLength(1);
    expect(mockHistory.push).toHaveBeenCalledWith("/");
  });
});