var startUpPageEl = document.querySelector("#startup-page");
var questionsPageEl = document.querySelector("#questions-page");
var gameOverPageEl = document.querySelector("#game-over-page");
var startButtonEl = document.querySelector("#start-button");
var mainParentEl = document.querySelector("#main-parent");
var timerEl = document.querySelector("#timer");
var timerGameOverEl = document.querySelector("#timer-end");
var scoreEl = document.querySelector("#end-score");

var startUp = function(){
  questionsPageEl.remove();
  gameOverPageEl.remove();
}

var startQuiz = function(){
  startUpPageEl.remove();
  mainParentEl.append(questionsPageEl);
  countdown();
}

var gameOver = function(timeLeft){
  questionsPageEl.remove();
  mainParentEl.append(gameOverPageEl);
  timerGameOverEl.textContent = "Time: " + timeLeft;
  scoreEl.textContent = "Your score is " + timeLeft + " points!"
}
startButtonEl.addEventListener("click", startQuiz)
startUp();

function countdown() {
  var timeLeft = 45;
  // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function(){
    if (timeLeft === 0 /*|| questions === done*/){
      clearInterval(timeInterval);
      gameOver(timeLeft)
    }
    else{
      timerEl.textContent = "Time: " + timeLeft;
      timeLeft--;
    }
  }, 1000);
}