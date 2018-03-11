import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const gameBody = (currentTask, game) => {
  console.log(`Welcome to the Brain Games!\n${currentTask}`);

  const getName = readlineSync.question('Hi! May I have your name? ');
  console.log(`Nice to meet you, ${getName}!\n`);


  const iter = (wrightAnswers) => {
    if (wrightAnswers === 0) {
      const str = console.log(`Congratulations, ${getName}!`);
      return str;
    }
    const pair = game();
    const correctAnswer = cdr(pair);
    const question = car(pair);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer:');


    if (answer === correctAnswer) {
      console.log('Correct! \n');
      return iter(wrightAnswers - 1);
    }

    console.log(`'${answer}' is wrong answer ;(. Correct answer was ${correctAnswer}. \nLets try again, ${getName} \n`);
    return false;
  };

  return iter(3);
};

export default gameBody;
