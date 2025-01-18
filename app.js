import { Text } from "./RandomText.js"; //importing random texts from RandomText.js file


let result = document.querySelector(".result");
let para = document.querySelector(".para");
let userinputBox = document.querySelector(".userinp");
let genbtn = document.querySelector(".generate");
let timer = document.querySelector(".timer");
let timerCountStart = document.querySelector(".start");
let timerCountStop = document.querySelector(".stop");
let userInputText = document.querySelector("#userinput");
let data;
let totalWords = 0;
let userInputedWords = 0;
let textKey = 0;
let sec = 0;
let min = 0;
let currenTime = 0;
let speedWPM = 0;

function generateTxt() {
  userinputBox.classList.remove("noshow");
  textKey = Math.floor(Math.random() * 9);
  console.log(textKey);
  genbtn.classList.add("noshow");
  data = Text[textKey];
  console.log(data);
  para.textContent = data;
  wordChecker(data, totalWords);
  setTimeout(start(), 3000);
  userInputText.focus();
}
genbtn.addEventListener("click", generateTxt);

// Word checker how many words are there in any text 
// This wordchecker part have done by gpt cause my logic has failed to count the words properly that programe always count more that actual words

const wordChecker = (text, wordvar) => {
  wordvar = text.trim().split(/\s+/).filter(Boolean).length;
  console.log(`Total words: ${wordvar}`);
};

// Timer for user
const start = () => {
  currenTime = setInterval(() => {
    sec++;
    if (sec === 60) {
      sec = 0;
      min++;
    } else if (min === 1) {
      sec = 0;
      stop();
      return;
    } else {
      if (sec < 10) {
        timer.innerText = `${min}:0${sec}`;
      } else {
        timer.innerText = `${min}:${sec}`;
      }
    }
    if (sec < 10) {
      timer.innerText = `${min}:0${sec}`;
    } else {
      timer.innerText = `${min}:${sec}`;
    }
  }, 1000);
};

const stop = () => {
  console.log("STOP");
  clearInterval(currenTime);
  console.log(min);
  console.log(sec);
  userInputText.disabled = true;
  speedCheck();
};
timerCountStop.addEventListener("click", stop);
function speedCheck() {
  if (userInputText.value === "") {
    alert("Please enter some text first!");
  } else {
    alert("Time's up!");
    wordChecker(userInputText.value, userInputedWords);
    let second = min * 60 + sec; // 1 * 60 + 0 this will happen
    console.log(second);
    if (second > 0) {
      speedWPM = Math.floor((userInputedWords * 60) / second);
      console.log(`Speed: ${speedWPM} WPM`);
    } else {
      console.log("Cannot calculate speed, time is zero.");
    }
  }
}
