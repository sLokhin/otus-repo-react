export const delay = (x: number): Promise<null> =>
  new Promise((r) => setTimeout(r, x));
