import { cons, car, cdr } from 'hexlet-pairs';
import gameBody from '..';

const currentTask = 'Find the greatest common divisor of given numbers.';

const greatestCommonDivisor = () => {
  const a = Math.floor(Math.random() * 100);
  const b = Math.floor(Math.random() * 100);
  const big = a >= b ? a : b;
  const small = a <= b ? a : b;
  const quest = `${a} ${b}`;

  if (a === 0 || b === 0) {
    return greatestCommonDivisor();
  }

  const gcd = (x, y) => {
    if (y === 0) {
      return x;
    }
    return gcd(y, x % y);
  };

  const answer = gcd(big, small);

  console.log(`TestMark: result should be ${answer}`);
  return cons(quest, answer);
};


const game = () => {
  const task = greatestCommonDivisor();
  const question = car(task);
  const correctAnswer = String(cdr(task));
  return cons(question, correctAnswer);
};
export default () => gameBody(currentTask, game);
