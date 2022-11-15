var readlineSync = require('readline-sync');
var score = 0;
var userName = readlineSync.question('Enter your name: ')
var questions = [
  {
    question: 'What is my favourite colour? ',
    answer: 'red',
  },
  {
    question: 'What is my favourite food? ',
    answer: 'gulab jamun',
  },
  {
    question: 'What is my favourite place? ',
    answer: 'home',
  },
  {
    question: 'Who is my favourite actor? ',
    answer: 'srk',
  },
  {
    question: "What is my brother's name? ",
    answer: 'nagesh',
  },
];

for (var ques = 0; ques < questions.length; ques++) {
  quiz(questions[ques].question, questions[ques].answer);
  // console.log(questions[ques].question)
}

console.log(userName + "'s score is: " + score);

function quiz(question, answer) {
  var userInput = readlineSync.question(question);
  if (userInput.toUpperCase() === answer.toUpperCase()) {
    score = score + 1;
    console.log("Yep! That's correct.");
  } else {
    score = score - 1;
    console.log("Nah! That's incorrect.");
  }
}
