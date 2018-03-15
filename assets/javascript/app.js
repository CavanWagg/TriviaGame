// const titleScreen = document.getElementById('title');
// const startButton = document.getElementById('start');
// const quizPage = document.getElementById('quiz');
// const results = document.getElementById('results');
// const submitButton = document.getElementById('submit');




//title screen


//on click, generate quiz page
$('#start').click(renderQuiz()).;

//start timer



// function timer(){
//   console.log('running timer')
//   renderResults();
// };
// setTimeout(timer(), 2000);

//end timer: times up, run answer check, go to results page

//create text with bubbles you can click

// submit button, run answer check, go to results page
$('#submit').click(renderResults());
clearTimeout(timer);;

//create a function that checks for correct/incorrect answers

//Results page: display results, reset buttom to try again

