import { delay } from "../Utils/delay";

export const login = async (name: string): Promise<string> => {
  await delay(1000);
  localStorage.setItem("login", name);
  return Promise.resolve(name);
};

export const logout = async (): Promise<void> => {
  await delay(1000);
  localStorage.removeItem("login");
  return Promise.resolve();
};

export const isLoggedIn = async (): Promise<boolean> => {
  await delay(1000);
  const login = localStorage.getItem("login");
  return Boolean(login);
};

export const getPlayerName = (): string | null => {
  return localStorage.getItem("login");
};
