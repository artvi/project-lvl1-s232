import { cons, car, cdr, isPair } from 'hexlet-pairs';
import gameBody from '..';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const currentTask = 'What number is missing in this progression?';

const createString = (pair) => {
  if (isPair(pair)) {
    const a = createString(car(pair));
    const b = createString(cdr(pair));
    return `${a} ${b}`;
  }
  return String(pair);
};


const createProgression = (start, step, pos) => {
  const iter = (acc) => {
    const progression = acc === pos ? '..' : start + (acc * step);
    if (acc === 9) {
      return progression;
    }
    return cons(progression, iter(acc + 1));
  };
  return iter(0);
};


const game = () => {
  const start = getRandomInt(0, 10);
  const step = getRandomInt(1, 10);
  const pos = getRandomInt(0, 10);
  const task = createProgression(start, step, pos);

  const question = createString(task);
  const correctAnswer = String(start + (pos * step));
  return cons(question, correctAnswer);
};

export default () => gameBody(currentTask, game);
