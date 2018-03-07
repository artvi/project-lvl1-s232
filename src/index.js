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


export const calc = () => {
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const randExpression = () => {
    const randOperator = (rand) => {
      if (rand <= 33) {
        return '+';
      }
      if (rand > 33 && rand <= 66) {
        return '-';
      }
      return '*';
    };
    const a = getRandomInt(0, 11);
    const oper = randOperator(getRandomInt(0, 101));
    const b = getRandomInt(0, 11);
    const expression = `${a} ${oper} ${b}`;

    return expression;
  };


  console.log('Welcome to the Brain Games! \nWhat is the result of the expression?');


  const getName = readlineSync.question('Hi! May I have your name? ');
  console.log(`Nice to meet you, ${getName}!`);


  const iter = (expression, wrightAnswers) => {
    console.log(`Question: ${expression}`);
    const answer = readlineSync.question('Your answer:');
    const correctAnswer = eval(expression);

    if (wrightAnswers === 3 && answer == correctAnswer) {
      console.log('Correct!\n');
      const str = console.log(`Congratulations, ${getName}!`);
      return str;
    }

    if (answer == correctAnswer) {
      console.log('Correct! \n');
      return iter(randExpression(), wrightAnswers + 1);
    }

    console.log(`'${answer}' is wrong answer ;(. Correct answer was ${correctAnswer}. \nLets try again, ${getName} \n`);
  };


  return iter(randExpression(), 1);
};

export default getUserName;
