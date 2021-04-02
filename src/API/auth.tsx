import { delay } from "../Utils/delay";

export const login = async (name: string): Promise<void> => {
  await delay(1000);
  await localStorage.setItem("login", name);
};

export const logout = async (): Promise<void> => {
  await delay(1000);
  await localStorage.removeItem("login");
};

export const isLoggedIn = async (): Promise<boolean> => {
  await delay(1000);
  const login = localStorage.getItem("login");
  return Boolean(login);
};

export const getPlayerName = (): string | null => {
  return localStorage.getItem("login");
};
