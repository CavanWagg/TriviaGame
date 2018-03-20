// const titleScreen = document.getElementById('title');
// const startButton = document.getElementById('start');
//&gt for >
//&lt for <


const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");
const quizQuestions = [
  {
    
    question: "1. What is the correct JavaScript syntax to change the content of the HTML element below? <br> <code> &ltp&gt id='demo'>This is a demo. &lt/p&gt</code>",
    answers: {
      a: 'document.getElementById("demo").innerHTML = "Hello World!"',  
      b: 'document.getElementByName("p").innerHTML = "Hello World!"',
      c: '#demo.innerHTML = "Hello World!"',
      d: 'document.getElement("p").innerHTML = "Hello World!"'
    },
    correctAnswer: 'a'
  },
  {
    question: "2. How do you create a function in JavaScript?",
    answers: {
      a: 'function = myFunction()', 
      b: 'function::myFunction()',
      c: 'function myFunction()',
      d: 'function:myFunction()'
    },
    correctAnswer: 'c'
  },
  {
    question: "3. <code> Number('2') - 2 == 0; </code> <br> What is the result?",
    answers: {
      a: 'True',
      b: 'False',
      c: 'TypeError',
      d: 'NaN'
    },
    correctAnswer: 'a'
  },
  {
    question: "4. <code> '5' - - '3'; </code> <br> What is the result?",
    answers: {
      a: '0',
      b: '8',
      c: '53',
      d: "'53'"
    },
    correctAnswer: 'b'
  },
  {
    question: "5. <code> new String ('This is a string') instanceof String; </code> <br> What is the result?",
    answers: {
      a: 'true',
      b: 'false',
      c: 'typeError',
      d: "'I am a string'"
    },
    correctAnswer: 'a'
  },
];
  
  function buildQuiz() {
    const htmlContent = [];
    //for each question...
    quizQuestions.forEach(
      (currentQuestion, questionNumber) => {
        // Store the list of answer choices
        const answers = [];
        // for each available answer...
        for(letter in currentQuestion.answers) {
          //add an HTML radio button
          answers.push(
            `<label> <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
            </label>`
          );
        }
        // add this question and its answers to the output
        htmlContent.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );

      });
      quizContainer.innerHTML = htmlContent.join('');
      document.getElementById("submit").style.visibility = "visible";
      document.getElementById("meme").style.display = "none";

  }
  function renderResults() {
    //gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');
    //Track user's answers
    let numberCorrect = 0;
    //for each question..
    quizQuestions.forEach((currentQuestion, questionNumber) => {

      //find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      console.log(selector);
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    //if the answer if correct
    if(userAnswer == currentQuestion.correctAnswer){
      //add to the number of correct answers
      numberCorrect++;

      //color the answers green
      answerContainers[questionNumber].style.color = 'green';
    }
    //if the answer is wrong or blank
    else{
      answerContainers[questionNumber].style.color = '#bd2130';
      console.log(userAnswer);
      console.log(currentQuestion.correctAnswer);
    }
    });

    //show number of correct answers 
    resultsContainer.innerHTML = `${numberCorrect} out of ${quizQuestions.length} <br> The correct answers are a,c,a,b,a`;
  };




  



//on click, generate quiz page
$('#start').click(function(){
  $(buildQuiz());
  $(this).remove();
})
// submit button, go to results page
submitButton.addEventListener("click", renderResults);
$('#submit').click(function() {
  clearInterval(countdown);
  $(this).hide();

})

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
      renderResults();
      $('#submit').hide();
      $('.display__time-left').append(`<br>Time's Up!`)
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

buttons.forEach(button => button.addEventListener('click', startTimer));




