import { cons } from 'hexlet-pairs';
import gameBody from '..';


const currentTask = 'Answer "yes" if number is even, otherwise answer "no".';

const game = () => {
  const question = Math.floor(Math.random() * 100);
  const solution = question % 2 === 0 ? 'yes' : 'no';
  return cons(question, solution);
};

export default () => gameBody(currentTask, game);
