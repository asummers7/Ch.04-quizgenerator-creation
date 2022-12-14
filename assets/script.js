var welcomeMessage = document.querySelector(".intro");
var description = document.querySelector(".description");
var startButton = document.querySelector(".button");
var timer = document.querySelector(".timer");
var list = document.querySelector(".list");
var response = document.querySelector(".response");
var startValue = 0
// var choice1 = document.getElementById("choice1");
// var choice2 = document.getElementById("choice2");
// var choice3 = document.getElementById("choice3");
// var choice4 = document.getElementById("choice4");
var time = 60;
var questionPosition = 0
var questionsArray = [
  {
    question: "How do you wrap an array",
    choices: ["one", "two", "three", "four"],
    answer: "one",
  },
  {
    question: "How do you wrap an array2",
    choices: ["one", "two", "three", "four"],
    answer: "one",
  },
  {
    question: "How do you wrap an array3",
    choices: ["one", "two", "three", "four"],
    answer: "one",
  },
  {
    question: "How do you wrap an array4",
    choices: ["one", "two", "three", "four"],
    answer: "one",
  },
  {
    question: "How do you wrap an array5",
    choices: ["one", "two", "three", "four"],
    answer: "one",
  },
];

// choice1.style.display = "none";
// choice2.style.display = "none";
// choice3.style.display = "none";
// choice4.style.display = "none";

function countdown() {
  var clock = setInterval(function () {
    time--;
    timer.textContent = "Time: " + time;
    if (time === 0) {
      clearInterval(clock);
      window.alert("You ran out of Time!");
    }
  }, 1000);
}
function begin() {
  timer.textContent = "Time: " + time;
  welcomeMessage.textContent = "The Great Coding Quiz";
  description.textContent = "this quiz is aksfdjas;lfa;lsk";
  var button = document.createElement("button");
  button.textContent = "Start!";
  startButton.appendChild(button);
  button.addEventListener("click", function(){
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
  list.innerHTML = ""

  for (let i = 0; i < questionsArray[questionPosition].choices.length; i++) {
    var button = document.createElement('button');
    button.textContent = questionsArray[questionPosition].choices[i]; 
    button.value = 20;
    button.onclick = eventListener; 
    list.append(button);
  }
}

function eventListener(event) {
  event.preventDefault();
  var element = event.target;
  console.log(element);
  console.log(element.value);
  if (element.textContent === questionsArray[questionPosition].answer) {
    response.textContent = "Correct";
    startValue += parseInt(element.value);
    localStorage.setItem("value", startValue);
    //question2();
  } else {
    response.textContent = "False";
    //question2();
  }
  questionPosition++;
  if (questionPosition < questionsArray.length) {
    question1();
  } else {
    //endgame function 
    console.log("game ended")
  }
}

function question2() {
  description.textContent = "hello";
}
