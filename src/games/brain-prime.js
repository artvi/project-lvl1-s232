import { cons } from 'hexlet-pairs';
import gameBody from '..';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const currentTask = 'Is this number prime?';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const game = () => {
  const question = getRandomInt(1, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return cons(question, correctAnswer);
};
export default () => gameBody(currentTask, game);
