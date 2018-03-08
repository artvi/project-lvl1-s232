import { cons } from 'hexlet-pairs';
import gameBody from '..';

const currentTask = 'What is the result of the expression?';

const randomExpression = () => {
  const randOperator = (rand) => {
    if (rand <= 33) {
      return '+';
    }
    if (rand > 33 && rand <= 66) {
      return '-';
    }
    return '*';
  };
  const a = Math.floor(Math.random() * 100);
  const oper = randOperator(Math.floor(Math.random() * 100));
  const b = Math.floor(Math.random() * 100);
  const expression = `${a} ${oper} ${b}`;

  return expression;
};

const game = () => {
  const question = randomExpression();
  const correctAnswer = eval(question);
  return cons(question, correctAnswer);
};
export default () => gameBody(currentTask, game);
