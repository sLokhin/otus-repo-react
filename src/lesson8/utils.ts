export const QuestionLink = "https://jsonplaceholder.typicode.com/comments";

type GetJSONFunction = () => Promise<any>;
type GetRandomFunction = (min: number, max: number) => number;

export const getRandom: GetRandomFunction = (min, max) => {
  return Math.floor(min + Math.random() * (max + 1 - min));
};

export const getJSON: GetJSONFunction = async () => {
  const min = 1;
  const max = 399;
  const rand = getRandom(min, max);
  return new Promise((resolve) => {
    fetch(`${QuestionLink}/${rand}`)
      .then((response) => response.json())
      .then((json) => {
        setTimeout(() => {
          console.log("JSON  ", json);
          resolve(json);
        }, 500);
      });
  });
};
