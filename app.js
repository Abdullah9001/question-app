const quizDB = [
  {
    question: "Q1. What is the past form of 'eat'?",
    a: "eat",
    b: "ate",
    c: "eaten",
    d: "have ate",
    ans: "ans2",
  },
  {
    question: "Q2. Which sentence is present continuous tense?",

    a: "I eat rice",
    b: "I am eating rice",
    c: "I have eaten rice",
    d: "I have been eating rice for 1 year",
    ans: "ans2",
  },
  {
    question: "Q3. Which sentence is present perfect tense?",

    a: "I eat rice",
    b: "I am eating rice",
    c: "I have eaten rice",
    d: "I have been eating rice for 1 year",

    ans: "ans3",
  },
  {
    question: "Q4. Which sentence is present perfect continuous tense?",

    a: "I eat rice",
    b: "I am eating rice",
    c: "I have eaten rice",
    d: "I have been eating rice for 1 year",
    ans: "ans4",
  },
  {
    question: "Q5. Which sentence is past continuous tense?",

    a: "I eat rice",
    b: "I was eating rice",
    c: "I have eaten rice",
    d: "I have been eating rice for 1 year",

    ans: "ans2",
  },
  {
    question: "Q6. Which sentence is past perfect tense?",

    a: "I eat rice",
    b: "I was eating rice",
    c: "I have eaten rice",
    d: "I have been eating rice for 1 year",

    ans: "ans3",
  },
  {
    question: "Q7. Which sentence is past perfect continuous tense?",

    a: "I eat rice",
    b: "I was eating rice",
    c: "I have eaten rice",
    d: "I have been eating rice for 1 year",

    ans: "ans4",
  },
  {
    question: "Q8. Which sentence is future continuous tense?",

    a: "I eat rice",
    b: "I will be eating rice",
    c: "I have eaten rice",
    d: "I have been eating rice for 1 year",

    ans: "ans2",
  },
  {
    question: "Q9. Which sentence is future perfect tense?",

    a: "I eat rice",
    b: "I will be eating rice",
    c: "I will have eaten rice",
    d: "I have been eating rice for 1 year",

    ans: "ans3",
  },
  {
    question: "Q10. Which sentence is future perfect continuous tense?",

    a: "I eat rice",
    b: "I will be eating rice",
    c: "I will have eaten rice",
    d: "I will have been eating rice for 1 year",

    ans: "ans4",
  },
];

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");

const answers = document.querySelectorAll(".answer");

const showScore = document.querySelector("#showscore");

const timeCount = document.querySelector("#timeCount");

const timeLines = document.querySelector(".timeLines");
const MCQ = document.querySelector(".MCQ");

let questionCount = 0;
let score = 0;
const startingMinute = 10;
let time = startingMinute * 60;

let counterLine = 0;
let width = 0;

const loadQuestion = () => {
  const questionList = quizDB[questionCount];

  question.innerText = questionList.question;

  option1.innerText = questionList.a;
  option2.innerText = questionList.b;
  option3.innerText = questionList.c;
  option4.innerText = questionList.d;
};

loadQuestion();

const getCheckAnswer = () => {
  let answer;
  answers.forEach((curAnsElem) => {
    if (curAnsElem.checked) {
      answer = curAnsElem.id;
    }
  });
  return answer;
};

const deselectAll = () => {
  answers.forEach((curAnsElem) => (curAnsElem.checked = false));
};

submit.addEventListener("click", () => {
  const checkedAnswer = getCheckAnswer();
  if (checkedAnswer === quizDB[questionCount].ans) {
    score++;
  }

  questionCount++;

  deselectAll();

  if (questionCount < quizDB.length) {
    loadQuestion();
  } else {
    showScore.innerHTML = `
      <h2>MCQ Result</h2>
      <h4>You Got ${score}/${quizDB.length}</h4>
      <button class="btn" onclick="location.reload()">Play Again</button>
    `;

    showScore.classList.remove("scoreArea");
    clearInterval();
    timeCount.style.display = "none";
    submit.style.display = "none";
    MCQ.style.display = "none";
  }
});

setInterval(updateCountdown, 1000);

function updateCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 10 ? "0" + seconds : seconds;
  timeCount.innerHTML = `Remaining Time: ${minutes}:${seconds}`;
  time--;

  if (time < 0) {
    showScore.innerHTML = `
      <h2>MCQ Result</h2>
      <h4>You Got ${score}/${quizDB.length}</h4>
      <button class="btn" onclick="location.reload()">Play Again</button>
    `;

    showScore.classList.remove("scoreArea");
    clearInterval();
    timeCount.textContent = "Finish Your Time: 00:00";
    submit.style.display = "none";
    MCQ.style.display = "none";
  }
}

function startTimerLine(time) {
  counterLine = setInterval(time, 50);
  function timer() {
    time++;
    timeLines.getElementsByClassName.width = time + "px";
    if (time > 319) {
      clearInterval();
    }
  }
}

startTimerLine();
