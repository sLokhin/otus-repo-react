export const QuestionLink = "https://jsonplaceholder.typicode.com/comments";

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

type GetJSONFunction = () => Promise<Comment>;
type CreateURLFunction = (id: number) => string;
type GetRandomFunction = (min: number, max: number) => number;

export const getRandomNumber: GetRandomFunction = (min, max) => {
  if (min > max) {
    throw new Error(
      "getRandomNumber function: 'min' should not be greater than 'max'"
    );
  }
  return Math.floor(min + Math.random() * (max + 1 - min));
};

export const createURL: CreateURLFunction = (id) => {
  return `${QuestionLink}/${id}`;
};

export const getJSON: GetJSONFunction = async () => {
  const min = 1;
  const max = 399;
  const rand = getRandomNumber(min, max);
  const url = createURL(rand);
  return new Promise((resolve) => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setTimeout(() => {
          console.log("JSON  ", json);
          resolve(json);
        }, 500);
      });
  });
};
