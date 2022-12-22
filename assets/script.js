var welcomeMessage = document.querySelector(".intro");
var description = document.querySelector(".description");
var viewHighScores = document.querySelector(".scoreList");
var startButton = document.querySelector(".button");
var timer = document.querySelector(".timer");
var list = document.querySelector(".list");
var response = document.querySelector(".response");
var score = document.querySelector(".score");
var startValue = 0;
var time = 60;
var functionRunning = false;
var questionPosition = 0;
var questionsArray = [
  {
    question: "How do you wrap an array?",
    choices: [
      "1. parentheses",
      "2. angled brackets",
      "3. curly brackets",
      "4. brackets",
    ],
    answer: "4. brackets",
  },
  {
    question: "Most loops start with a ___ statement.",
    choices: ["1. for", "2. let", "3. const", "4. var"],
    answer: "1. for",
  },
  {
    question: "What is the common notation to DECREMENT a variable?",
    choices: ["1. ++", "2. ==", "3. --", "4. ==="],
    answer: "3. --",
  },
  {
    question: "An object can contain ___ key-value pairs.",
    choices: ["1. one", "2. two", "3. none", "4. unlimited"],
    answer: "4. unlimited",
  },
  {
    question: "Local Storage is located where?",
    choices: [
      "1. on the computer",
      "2. on the internet",
      "3. in the DOM",
      "4. on VS code",
    ],
    answer: "3. in the DOM",
  },
];
viewHighScores.setAttribute("style", "background-color:white; color:purple");
viewHighScores.addEventListener("click", function (event) {
  event.preventDefault();
  startButton.remove();
  welcomeMessage.textContent = "";
  description.textContent = "High Scores";
  var list = document.createElement("ol");
  var listResults = document.createElement("li");
  listResults.textContent =
    localStorage.getItem("initials") + " - " + localStorage.getItem("value");
  list.setAttribute("style", "background-color:#CBC3E3");
  listResults.setAttribute(
    "style",
    "background-color:#CBC3E3; width:100px; text-align:center"
  );
  list.appendChild(listResults);
  score.append(list);
  var back = document.createElement("button");
  var clear = document.createElement("button");
  back.textContent = "back";
  clear.textContent = "Clear HighScores";
  back.setAttribute("style", "float:left");
  clear.addEventListener("click", function (event) {
    event.preventDefault();
    listResults.remove();
  });
  score.append(back, clear);
});
function countdown() {
  var clock = setInterval(function () {
    time--;
    timer.textContent = "Time: " + time;
    if (time <= 0) {
      clearInterval(clock);
      window.alert("You ran out of Time!");
      highScore();
    } else if (functionRunning === true) {
      clearInterval(clock);
    }
  }, 1000);
}
function begin() {
  timer.textContent = "Time: " + time;
  welcomeMessage.textContent = "The Great Coding Quiz";
  description.textContent =
    "This quiz is meant to test your knowledge on common javascript coding.";
  var button = document.createElement("button");
  button.textContent = "Start!";
  startButton.appendChild(button);
  button.addEventListener("click", function () {
    countdown();
    question1();
  });
}
begin();

function question1() {
  welcomeMessage.textContent = "";
  description.textContent = "";
  startButton.remove();
  description.textContent = questionsArray[questionPosition].question;
  list.innerHTML = "";

  for (let i = 0; i < questionsArray[questionPosition].choices.length; i++) {
    var button = document.createElement("button");
    button.textContent = questionsArray[questionPosition].choices[i];
    button.value = 20;
    button.onclick = eventListener;
    list.append(button);
  }
}

function eventListener(event) {
  event.preventDefault();
  var element = event.target;
  if (element.textContent === questionsArray[questionPosition].answer) {
    response.textContent = "Correct";
    startValue += parseInt(element.value);
    localStorage.setItem("value", startValue);
  } else {
    time -= 15;
    response.textContent = "False";
  }

  questionPosition++;

  if (questionPosition < questionsArray.length) {
    question1();
  } else {
    highScore();
  }
}

function highScore() {
  functionRunning = true;
  response.textContent = "";
  description.textContent = "You finished!";
  list.textContent = "";
  var scoreResult = document.createElement("div");
  scoreResult.textContent =
    "Your final score was " + localStorage.getItem("value");
  score.append(scoreResult);
  var label = document.createElement("label");
  label.textContent = "Enter Initials: ";
  score.append(label);
  var enterName = document.createElement("textarea");
  enterName.placeholder = "text here";
  score.append(enterName);
  var button = document.createElement("button");
  button.textContent = "Submit";
  score.append(button);
  button.addEventListener("click", function (event) {
    event.preventDefault();
    localStorage.setItem("initials", enterName.value);
    scoreResult.textContent = "";
    label.textContent = "";
    enterName.remove();
    button.remove();
    description.textContent = "High Scores";
    var list = document.createElement("ol");
    var listResults = document.createElement("li");
    listResults.textContent =
      localStorage.getItem("initials") + " - " + localStorage.getItem("value");
    list.setAttribute("style", "background-color:#CBC3E3");
    listResults.setAttribute(
      "style",
      "background-color:#CBC3E3; width:100px; text-align:center"
    );
    list.appendChild(listResults);
    score.append(list);
    var back = document.createElement("button");
    var clear = document.createElement("button");
    back.textContent = "back";
    clear.textContent = "Clear HighScores";
    back.setAttribute("style", "float:left");
    clear.addEventListener("click", function (event) {
      event.preventDefault();
      listResults.remove();
    });
    score.append(back, clear);
  });
}
