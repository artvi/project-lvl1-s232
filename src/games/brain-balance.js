import { cons } from 'hexlet-pairs';
import gameBody from '..';


const currentTask = 'Balance the given number.';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const findTheSum = (num) => {
  const str = `${num}`;
  let sum = 0;
  for (let i = 0; i < str.length; i += 1) {
    sum += Number(str[i]);
  }
  return sum;
};

const balanceTheNum = (num) => {
  const str = `${num}`;
  const minValue = Math.floor(findTheSum(num) / str.length);
  const remain = findTheSum(num) % str.length;
  const indexOfLargerNumber = str.length - remain;
  let newStr = '';
  for (let i = 0; i < str.length; i += 1) {
    if (i >= indexOfLargerNumber) {
      newStr += minValue + 1;
    } else {
      newStr += minValue;
    }
  }
  console.log(`TestMark: result should be ${newStr}`);
  return newStr;
};


const game = () => {
  const question = getRandomInt(100, 10000);
  const correctAnswer = balanceTheNum(question);
  return cons(question, correctAnswer);
};
export default () => gameBody(currentTask, game);
