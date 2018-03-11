import { cons, car, cdr } from 'hexlet-pairs';
import gameBody from '..';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const currentTask = 'Is this number prime?';

const isPrime = (num) => {
  let result;
  for (let i = 2; i <= num; i += 1) {
    if (num % i === 0 && i !== num) {
      result = false;
      break;
    } else if (num % i === 0 && i === num) {
      result = true;
      break;
    }
  }
  return result;
};

const isPrimeGame = () => {
  const quest = getRandomInt(1, 100);
  const answer = isPrime(quest) ? 'yes' : 'no';
  return cons(quest, answer);
};

const game = () => {
  const task = isPrimeGame();
  const question = car(task);
  const correctAnswer = cdr(task);
  return cons(question, correctAnswer);
};
export default () => gameBody(currentTask, game);
