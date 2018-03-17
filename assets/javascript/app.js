// const titleScreen = document.getElementById('title');
// const startButton = document.getElementById('start');
// const quizPage = document.getElementById('quiz');
// const results = document.getElementById('results');
// const submitButton = document.getElementById('submit');


//on click, generate quiz page
$('#start').click(function(){
  $(this).remove();
  //render quiz page function
  renderQuiz(questions, "#quiz-section");
})

//quiz questions array/object

//quiz content
var renderQuiz = function(question, renderArea) {
var quizDiv = $("<div class='quiz'");
var quizQuestion = $("<div class='quiz-question'>");
quizDiv.append(quizQuestion);
$(renderArea).append(quizDiv);
  
}

//timer 
let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
 countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    //check if we should stop it
    if(secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    //display it
    displayTimeLeft(secondsLeft);
  }, 1000);
}




function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = (seconds % 60);
  const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
  document.title = display;
  timerDisplay.textContent = display;
}
function startTimer() {
  const seconds = parseInt(this.dataset.time);
  console.log(seconds);
  timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer))




//title screen



//start timer



// function timer(){
//   console.log('running timer')
//   renderResults();
// };
// setTimeout(timer(), 2000);

//end timer: times up, run answer check, go to results page

//create text with bubbles you can click

// submit button, run answer check, go to results page
// $('#submit').click(renderResults());
// clearTimeout(timer);;

//create a function that checks for correct/incorrect answers

//Results page: display results, reset buttom to try again

