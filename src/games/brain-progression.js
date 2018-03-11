import { cons, car, cdr } from 'hexlet-pairs';
import gameBody from '..';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const currentTask = 'What number is missing in this progression?';

const gameOfProgression = () => {
  const start = getRandomInt(0, 10);
  const step = getRandomInt(1, 10);
  const pos = getRandomInt(0, 10);

  let str = '';
  let num = start;
  let answer = 0;
  for (let i = 0; i <= 9; i += 1) {
    if (i === 0) {
      str = pos === 0 ? '.. ' : `${start} `;
      num = start;
      answer = pos === 0 ? num : 0;
    }
    if (i === pos && i !== 0) {
      str += '.. ';
      num += step;
      answer = num;
    } else if (i !== 0) {
      str += `${num + step} `;
      num += step;
    }
  }
  console.log(`TestMark: secret is ${answer}`);
  return cons(str, answer);
};


const game = () => {
  const task = gameOfProgression();
  const question = car(task);
  const correctAnswer = cdr(task);
  return cons(question, correctAnswer);
};
export default () => gameBody(currentTask, game);
