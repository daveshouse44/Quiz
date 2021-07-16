// Variables for the game
var startButtonEl = document.querySelector("#buttonPlay");
var questionsText = document.querySelector("#question");
var btnElA = document.querySelector("#option0");
var btnElB = document.querySelector("#option1");
var btnElC = document.querySelector("#option2");
var btnElD = document.querySelector("#option3");
var resultEl = document.querySelector("#result");
var timerEl = document.querySelector("#timeRemain");
var scorePlayerEl = document.getElementById("scoreCont");
var buttonReset = document.querySelector(".buttonReset");

var questionIndex;
var highScores = [];

// Timer variables
var timer;
var timeRemain;

// Event Listener to start Quiz
startButtonEl.addEventListener("click", buildQuiz);

function buildQuiz() {
    timer();
    startButtonEl.style.display = "none";
    questionIndex = 0;
    showQuestions();
}

// Displays quiz questions
function showQuestions() {
    if (questionIndex >= wineQuestions.length) {
        showHighScores();
    } else {
        questionsText.textContent = wineQuestions[questionIndex].question;
        btnElA.textContent = wineQuestions[questionIndex].Choice1;
        btnElB.textContent = wineQuestions[questionIndex].Choice2;
        btnElC.textContent = wineQuestions[questionIndex].Choice3;
        btnElD.textContent = wineQuestions[questionIndex].Choice4;
    }

// Displays user data in High Scores
    if (scorePlayerEl) {

    }
// Displays next question object
}
let nextQuestion = function (choice) {
    if (questionIndex == wineQuestions.length - 1) {
        let initials = prompt("Enter your Initials!");

        let item = {
            player: initials,
            score: timerEl.textContent,

        };

        let users = JSON.parse(localStorage.getItem("users"));

        if (users) {
            users.push(item);
        } else {
            users = [];
            users.push(item);
        }

        // Saves High Scores
        localStorage.setItem("users", JSON.stringify(users));

    var previousScore = JSON.parse(localStorage.getItem("users")) || [];

    for (i = 0; i < previousScore.length; i++) {
        console.log("eachPlayerScore", previousScore[i]);
    var liEl = document.createElement("li");
        liEl.textContent=previousScore[i].initials + " - " + previousScore[i].score;
    var OlElement = document.getElementById("scoreCont");
        OlElement.append(liEl);

}
function showHighScores(){
    window.location.replace("highScores.html");
}
return;

resetButton.addEventListener("click", resetScores);
//reset
function resetScores () {
    localStorage.clear("previousScoreList");
    location.reload();
}


    }
    // Compares user choice with correct or incorrect options
    if (wineQuestions[questionIndex].correctAnswer == wineQuestions[questionIndex][choice]) {
        document.getElementById("result").style.color = "green";
        resultEl.textContent = "Correct!";    

    } else {
        document.getElementById("result").style.color = "red";
        resultEl.textContent = "Incorrect!"
        timeRemain -= 5;
    }

    questionIndex++;
    questionsText.textContent = wineQuestions[questionIndex].question;
    btnElA.textContent = wineQuestions[questionIndex].Choice1;
    btnElB.textContent = wineQuestions[questionIndex].Choice2;
    btnElC.textContent = wineQuestions[questionIndex].Choice3;
    btnElD.textContent = wineQuestions[questionIndex].Choice4;
      
};

// Timer Element
function timer() {
    timeRemain = 60;
    timer = setInterval(function () {
        if (timeRemain > 0) {
            timeRemain--;
            timerEl.textContent = timeRemain;
        } else {
            timerEl.textContent = 0;
            clearInterval(timer);
        }
    }, 1000);
}
// Added Event Listeners
btnElA.addEventListener("click", nextQuestion);
btnElB.addEventListener("click", nextQuestion);
btnElC.addEventListener("click", nextQuestion);
btnElD.addEventListener("click", nextQuestion);