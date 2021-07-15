// Variables for the game
var startButtonEl = document.querySelector("#buttonPlay");
var questionsText = document.querySelector("#question");
var btnElA = document.querySelector("#option0");
var btnElB = document.querySelector("#option1");
var btnElC = document.querySelector("#option2");
var btnElD = document.querySelector("#option3");
var resultEl = document.querySelector("#result");




// Added Event Listeners
startButtonEl.addEventListener("click", buildQuiz);

function buildQuiz(){
    //timerEl();
    startButtonEl.style.display = "none";
    questionIndex = 0;
    showQuestions();
}

function showQuestions(){
    if (questionIndex >= wineQuestions.length) {
        endQuiz();
    } else {
        questionsText.textContent = wineQuestions[questionIndex].question;
        btnElA.textContent = wineQuestions[questionIndex].Option1;
        btnElB.textContent = wineQuestions[questionIndex].Option2;
        btnElC.textContent = wineQuestions[questionIndex].Option3;
        btnElD.textContent = wineQuestions[questionIndex].Option4;

        


    }
}
