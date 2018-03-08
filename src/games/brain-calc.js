import { cons, car, cdr } from 'hexlet-pairs';
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

  const resultOfExpression = () => {
    const a = Math.floor(Math.random() * 50);
    const oper = randOperator(Math.floor(Math.random() * 100));
    const b = Math.floor(Math.random() * 50);
    const expression = `${a} ${oper} ${b}`;
    let result = 0;

    if (oper === '+') {
      result = a + b;
    }
    if (oper === '-') {
      result = a - b;
    }
    if (oper === '*') {
      result = a * b;
    }

    return cons(expression, result);
  };
  return resultOfExpression();
};

const game = () => {
  const task = randomExpression();
  const question = car(task);
  const correctAnswer = cdr(task);
  return cons(question, correctAnswer);
};
export default () => gameBody(currentTask, game);
