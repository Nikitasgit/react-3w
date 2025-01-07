const randomNumber = () => {
  return Math.ceil(Math.random() * 6);
};

const checkIfSuccess = (array) => {
  return array.every((num) => num === 6);
};

export const playGame = (times) => {
  let num = 0;
  let win = 0;
  let lastResult = [];

  while (num < times) {
    let n = 0;
    const result = [];
    while (n < 3) {
      result.push(randomNumber());
      n++;
    }
    if (checkIfSuccess(result)) {
      win++;
    }
    lastResult = result;
    num++;
  }
  return { lastResult, win };
};
