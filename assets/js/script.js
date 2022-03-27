var startUpPageEl = document.querySelector("#startup-page");
var questionsPageEl = document.querySelector("#questions-page");
var gameOverPageEl = document.querySelector("#game-over-page");
var highScoresPageEl = document.querySelector("#high-scores-page");
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
var saveButtonEl = document.querySelector("#save-submit");
var initialsInputEl = document.querySelector("input[name='initials-name']");
var viewHighScores1El = document.querySelector("#view-highscores-1");
var viewHighScores2El = document.querySelector("#view-highscores-2");
var viewHighScores3El = document.querySelector("#view-highscores-3");
var goBackButtonEl = document.querySelector("#go-back-button");
var resetButtonEl = document.querySelector("#highscores-reset-button");
var scoreListEl =  document.querySelector("#score-list");

var timeLeft = 45; // amount of time for the quiz
var i = 0 // counter for iterations
var stopTheClock = false;
var finalScoreCounter = 0;
var finalScore = [
  {
    initials: '',
    score: null
  }
];
var finalScoreArr = [];

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
  highScoresPageEl.remove();
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

var gameOver = function(){ // shows you a game over screen and your score
  questionsPageEl.remove();
  mainParentEl.append(gameOverPageEl);

  if(timeLeft < 0){
    timeLeft = 0;
  }

  timerGameOverEl.textContent = "Time: " + timeLeft;
  scoreEl.textContent = "Your score is " + timeLeft + " points!";
}

var saveData = function(){ // saves score and initials to the local storage

  if(finalScore.initials === "" || finalScore.initials === null){
    window.alert("Please enter valid initials.")
  }
  else{
  finalScoreArr = [finalScore.initials,finalScore.score]
  localStorage.setItem("highscore" + finalScoreCounter, JSON.stringify(finalScoreArr));
  window.alert("High Score Saved!")
  finalScoreCounter++;
  location.reload()
  }

}

var loadData = function(){ // loads data from the local storage to be used on the high score leaderboard

  for(j=0;j<100;j++){
    finalScoreArr = localStorage.getItem("highscore"+ j , JSON.stringify(finalScoreArr));
    finalScoreArr = JSON.parse(finalScoreArr);
   
    if(finalScoreArr){
      var listEl = document.createElement("li");
      finalScoreCounter++;
      listEl.textContent = finalScoreArr[0] + " : " + finalScoreArr[1];
      console.log(listEl);
      scoreListEl.appendChild(listEl);
    }
  }
}



startButtonEl.addEventListener("click", startQuiz); // listens to the start quiz button

saveButtonEl.addEventListener("click", function(){ // listens to the save data button
  finalScore.initials = initialsInputEl.value;
  finalScore.score = timeLeft;
  saveData();
});

questionButton1El.addEventListener("click", function(){ // listens to the quiz option A button
  checkAnswer(this.textContent);
})
questionButton2El.addEventListener("click", function(){ // listens to the quiz option B button
  checkAnswer(this.textContent);
})
questionButton3El.addEventListener("click", function(){ // listens to the quiz option C button
  checkAnswer(this.textContent);
})
questionButton4El.addEventListener("click", function(){ // listens to the quiz option D button
  checkAnswer(this.textContent);
})

viewHighScores1El.addEventListener("click", function(){ // listens to the view highscores button (startup page)
  startUp();
  startUpPageEl.remove();
  mainParentEl.append(highScoresPageEl);
});
viewHighScores2El.addEventListener("click", function(){ // listens to the view highscores button (questions page)
  startUp();
  startUpPageEl.remove();
  mainParentEl.append(highScoresPageEl);
});
viewHighScores3El.addEventListener("click", function(){ // listens to the view highscores button (gameover page)
  startUp();
  startUpPageEl.remove();
  mainParentEl.append(highScoresPageEl);
});

goBackButtonEl.addEventListener("click", function(){ // listens to the go back button(highscores page)
  startUp();
  mainParentEl.append(startUpPageEl);
  location.reload()
});
resetButtonEl.addEventListener("click", function(){ // listens to the clear highscores button(highscores page)
  localStorage.clear()
  window.alert("High Scores Cleared!")
  location.reload()
});

startUp(); //removes all pages other than the start up page
loadData(); //loads local storage data