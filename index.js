
var readlineSync = require('readline-sync');
var score = 0;


function welcome() {
  var userName = readlineSync.question("Hey , What's your name? ");

  console.log("Welcome " + userName + " to DO YOU KNOW Mansuri?");

  const pressKey = readlineSync.question('Hit Enter key to start.', { hideEchoBack: true, mask: '' })

  console.log(pressKey)

  console.log("Here goes the first question" + " (Remember - you have to press the key assigned to the write answer)")

}

welcome();

var questions = [
  {
    question: "What is his favourite color? ",
    answer: ['White', 'Blue', 'Pink', 'Black'],
    answerOpt: 'Black'
  },
  {
    question: "Which brand laptop i used ? ",
    answer: ['hp', 'dell', 'apple', 'asus'],
    answerOpt: 'hp'
  },
  {
    question: "where i live? ",
    answer: ['India', 'America', 'Africa', 'London'],
    answerOpt: 'India'
  },
  {
    question: " Whick brand Mobile i used ",
    answer: ['vivo', 'apple', 'oppo', 'redmi'],
    answerOpt: 'oppo'
  },
  {
    question: "what is my hobby? ",
    answer: ['Coding', 'swimming', 'running', 'Reading'],
    answerOpt: 'Coding'
  },
  {
    question: "what is my age? ",
    answer: ['23', '24', '22', '26'],
    answerOpt: '22'
  }
]


questions.map((DB) => {
  let userAnswer = readlineSync.keyInSelect(DB.answer, DB.question)
  if (DB.answer[userAnswer] === DB.answerOpt) {
    score = score + 1
    console.log("Yes, you are right")
    console.log("And your score is: " + score)
  } else {
    console.log("Oops, you are wrong")
    console.log("And your score is: " + score)
  }
  console.log("--------------------------------");
})

console.log("finally Yor score is : " + score)





