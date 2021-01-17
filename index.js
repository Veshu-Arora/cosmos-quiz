var readlineSync = require('readline-sync');

var score = 0;
var userName = readlineSync.question("PLEASE ENTER YOUR NAME: ");

console.log("\nWELCOME " + userName.toUpperCase() + " TO - THE COSMOS QUIZ\n")

console.log("THIS QUIZ WILL TEST YOUR KNOWLEDGE OF COSMOS! LET'S START");

console.log("\nRULES:")
console.log("1- YOU GET +2 MARKS FOR EACH CORRECT ANSWER")
console.log("2- YOU GET -1 MARKS FOR EACH INCORRECT ANSWER\n")

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if(userAnswer === answer) {
    score = score + 2;
    console.log("You are right!")
  } else {
    score = score - 1;
    console.log("Oh,You are wrong!")
  }

  console.log("current score: " + score)
  console.log("-------------X-------------")
}

var questions = [
  {
    question: "What is the name of the first spaceship to leave the solar system? ",
    answer: "voyager 1"
  },

  {
    question: "What is the name of the rover that will land on Mars on 18 February 2021? ",
    answer: "perseverance"
  },

  {
    question: "Which planet of our solar system has a Great Red Spot which is actually a storm? ",
    answer: "jupiter"
  },

  {
    question: "who is the present host of the famous TV show Cosmos: A Spacetime Odyssey? ",
    answer: "neil degrasse tyson"
  },

  {
    question: "Where is India's biggest space observatory i.e. Indian Astronomical Observatory located? ",
    answer: "ladakh"
  },
]

for( var i = 0; i < questions.length; i++) {
  play(questions[i].question, questions[i].answer)
}

console.log("YOUR TOTAL SCORE IS: ", score);

if(score === 10){
  console.log("WOHOO! YOU SCORED A PERFECT 10!")
} 
