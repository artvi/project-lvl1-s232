import { cons, car, cdr } from 'hexlet-pairs';
import gameBody from '..';

const currentTask = 'Find the greatest common divisor of given numbers.';

const findCommonDivisors = () => {
  const a = Math.floor(Math.random() * 50);
  const b = Math.floor(Math.random() * 50);
  const question = `${a} ${b}`;

  if (a === 0 || b === 0) {
    return findCommonDivisors();
  }

  const findDivisors = (num) => {
    let str = ' ';
    for (let i = 1; i <= num; i += 1) {
      if (num % i === 0) {
        str += `${i} `;
      }
    }
    return str;
  };

  const str1 = findDivisors(a);
  const str2 = findDivisors(b);

  console.log(str1);
  console.log(str2);

  const findCommon = (firstList, secondList) => {
    let commonDivisors = '';
    for (let i = 0; i < firstList.length; i += 1) {
      if (secondList.indexOf(firstList[i]) !== -1 && firstList[i] !== ' ' && firstList[i + 1] === ' ' && firstList[i - 1] === ' ') {
        commonDivisors += (`${firstList[i]} `);
      }
      if (firstList[i] !== ' ' && firstList[i + 1] !== ' ' && secondList.indexOf(`${firstList[i]}${firstList[i + 1]}`) !== -1) {
        commonDivisors += (`${firstList[i]}${firstList[i + 1]} `);
      }
    }
    return commonDivisors.substring(0, commonDivisors.length - 1);
  };

  const commonList = findCommon(str1, str2);
  const findAnswer = (str) => {
    const lastIndex = commonList.length - 1;

    if (str.length > 1 && str[lastIndex - 1] !== ' ') {
      return `${str[lastIndex - 1]}${str[lastIndex]}`;
    }
    return str[lastIndex];
  };
  const answer = findAnswer(commonList);

  console.log(commonList);
  console.log(answer);

  return cons(question, answer);
};

const game = () => {
  const task = findCommonDivisors();
  const question = car(task);
  const correctAnswer = cdr(task);
  return cons(question, correctAnswer);
};
export default () => gameBody(currentTask, game);
