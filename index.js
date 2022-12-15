
var readlineSync = require('readline-sync');
var score = 0;


function welcome() {
  var userName = readlineSync.question("Hey , What's your name? ");

  console.log("Welcome " + userName + " to DO YOU KNOW Mansuri?");
}

welcome();

var questions = [
  {
    question: "What is my Passion ?",
    answer: "coding"
  },
  {
    question: "what is my favourite language in technology  ?",
    answer: "javascript"
  },
  {
    question: "where do i live ?",
    answer: "india"
  }
]


function playGame() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    var userAnswer = readlineSync.question(currentQuestion.question);
    if (currentQuestion.answer == userAnswer) {
      console.log("you are right");
      score = score + 1;
    } else {
      console.log("You are wrong");
    }
  }
}

playGame();

console.log("Finally your Score is : " + score);