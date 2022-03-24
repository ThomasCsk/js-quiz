var startUpPageEl = document.querySelector("#startup-page");
var questionsPageEl = document.querySelector("#questions-page");
var gameOverPageEl = document.querySelector("#game-over-page");
var startButtonEl = document.querySelector("#start-button");
var mainParentEl = document.querySelector("#main-parent");

var startUp = function(){
  questionsPageEl.remove();
  gameOverPageEl.remove();
}

var startQuiz = function(){
  startUpPageEl.remove();
  mainParentEl.append(questionsPageEl);
  /*TimerFunction Start*/
}

var gameOver = function(){
  questionsPageEl.remove();
  mainParentEl.append(gameOverPageEl);
}
startButtonEl.addEventListener("click", startQuiz)
startUp();