var startUpPageEl = document.querySelector("#startup-page");
var questionsPageEl = document.querySelector("#questions-page");
var gameOverPageEl = document.querySelector("#game-over-page");
var startButtonEl = document.querySelector("#start-button");
var mainParentEl = document.querySelector("#main-parent");
var timerEl = document.querySelector("#timer");
var feedbackEl = document.querySelector("#feedback");
var timePenaltyEl = document.querySelector("#time-penalty");
var timerGameOverEl = document.querySelector("#timer-end");
var scoreEl = document.querySelector("#end-score");
var questionButton1El = document.querySelector("#answer-1");
var questionButton2El = document.querySelector("#answer-2");
var questionButton3El = document.querySelector("#answer-3");
var questionButton4El = document.querySelector("#answer-4");
var questionTextEl = document.querySelector("#question-text");
var answerOne = document.querySelector("#answer-1");
var answerTwo = document.querySelector("#answer-2");
var answerThree = document.querySelector("#answer-3");
var answerFour = document.querySelector("#answer-4");

var timeLeft = 45; // amount of time for the quiz
var i = 0 // counter for iterations
var stopTheClock = false;

var questions = [ // the questions
  {
    question: "Commonly used data types DO NOT include:",
    answer: "C. Alerts",
    options: [
      "A. Strings",
      "B. Booleans",
      "C. Alerts",
      "D. Numbers"
    ]
  },
  {
    question: "The condition in an if/else statement is enclosed with ________.",
    answer: "C. Parenthesis",
    options: [
      "A. Quotes",
      "B. Curly Brackets",
      "C. Parenthesis",
      "D. Square Brackets"
    ]
  },
  {
    question: "Arrays in JavaScript can be used to store ________.",
    answer: "D. All of the Above",
    options: [
      "A. Numbers and Strings",
      "B. Other Arrays",
      "C. Booleans",
      "D. All of the Above"
    ]
  },
  {
    question: "String values must be enclosed within ________ when being assigned to variables.",
    answer: "C. Quotes",
    options: [
      "A. Commas",
      "B. Curly Brackets",
      "C. Quotes",
      "D. Parenthesis"
    ]
  },
  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answer: "D. Console.log",
    options: [
      "A. JavaScript",
      "B. Terminal/Bash",
      "C. For Loops",
      "D. Console.log"
    ]
  }
]

var startUp = function(){ // function that makes only the starting screen appear
  questionsPageEl.remove();
  gameOverPageEl.remove();
}

var startQuiz = function(){ // removes the starting screen, add the questions, and starts the timer
  startUpPageEl.remove();
  mainParentEl.append(questionsPageEl);
  countdown();
  questionsFunc();
}

var countdown = function() { // timer function
  var timeInterval = setInterval(function(){
    if (timeLeft < 0 || stopTheClock === true){
      clearInterval(timeInterval);
      gameOver(timeLeft);
    }
    else{
      timerEl.textContent = "Time: " + timeLeft;
      timeLeft--;
    }
  }, 1000);
}

var questionsFunc = function(){ //function to cycle the questions
  questionTextEl.textContent = questions[i].question;
  answerOne.textContent = questions[i].options[0];
  answerTwo.textContent = questions[i].options[1];
  answerThree.textContent = questions[i].options[2];
  answerFour.textContent = questions[i].options[3];
}

var checkAnswer = function(selected){ // checks to see if the selected option is correct

  if(selected === questions[i].answer){
    feedbackEl.textContent = "Correct!";
    timePenaltyEl.textContent = "Time + 5 Seconds";
    timeLeft = timeLeft + 5;
  }
  else{
    feedbackEl.textContent = "Wrong!";
    timePenaltyEl.textContent = "Time - 5 Seconds";
    timeLeft = timeLeft - 5;        
  }
  
  i++;

  if(i === 5){
    stopTheClock = true;
    gameOver();
  }
  else{
    questionsFunc();
  }
}

var gameOver = function(){
  questionsPageEl.remove();
  mainParentEl.append(gameOverPageEl);

  timerGameOverEl.textContent = "Time: " + timeLeft;
  scoreEl.textContent = "Your score is " + timeLeft + " points!";

}

startButtonEl.addEventListener("click", startQuiz);

questionButton1El.addEventListener("click", function(){
  checkAnswer(this.textContent);
})
questionButton2El.addEventListener("click", function(){
  checkAnswer(this.textContent);
})
questionButton3El.addEventListener("click", function(){
  checkAnswer(this.textContent);
})
questionButton4El.addEventListener("click", function(){
  checkAnswer(this.textContent);
})

startUp();