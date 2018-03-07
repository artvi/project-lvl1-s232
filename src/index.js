import readlineSync from 'readline-sync';

const getUserName = () => {
  const getName = readlineSync.question('Hello there, little monkey! Wanna become a human? I can help you! What is your name? Put your name here: ');
  console.log(`Nice to meet you, ${getName} !`);
};

export const miniGame = () => {
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  console.log('Welcome to the Brain Games! \nAnswer "yes" if number is even, otherwise answer "no".');


  const getName = readlineSync.question('Hi! May I have your name? ');
  console.log(`Nice to meet you, ${getName}!`);


  const iter = (num, wrightAnswers) => {
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer:');
    const correctAnswer = num % 2 === 0 ? 'yes' : 'no';

    if (wrightAnswers === 3 && answer.toString() === correctAnswer) {
      console.log('Correct!\n');
      const str = console.log(`Congratulations, ${getName}!`);
      return str;
    }

    if (answer.toString() === correctAnswer) {
      console.log('Correct! \n');
      return iter(getRandomInt(0, 101), wrightAnswers + 1);
    }

    console.log(`'${answer}' is wrong answer ;(. Correct answer was ${correctAnswer}. \nLets try again, ${getName} \n`);
    return iter(getRandomInt(0, 101), 1);
  };


  return iter(getRandomInt(0, 101), 1);
};

export default getUserName;
