import readlineSync from 'readline-sync';

const getUserName = () => {
   var getName = readlineSync.question('Hello there, monkey! Wanna become a human? I can help you! What is your name? Put your name here: ');
console.log('Nice to meet you, ' + getName + '!');
};

export default getUserName;

