import { Text } from "./RandomText.js"; //importing random texts from RandomText.js file

let result = document.querySelector(".result");
let para = document.querySelector(".para");
let userinputBox = document.querySelector(".userinp"); //userinp
let genbtn = document.querySelector(".generate");
let timer = document.querySelector(".timer");
let timerCountStop = document.querySelector(".stop");
let userInputText = document.querySelector("#userinput");
let hero = document.querySelector(".hero-sec");
let data;
let userReset = document.querySelector(".reset");
let totalWords = 0;
let userInputedWords = 0;
let textKey = 0;
let sec = 0;
let min = 0;
let ifActive = true;
let currenTime;
let speedWPM = 0;
let wordsArray = [];

function generateTxt() {
  userinputBox.classList.remove("hide");
  textKey = Math.ceil(Math.random() * 15);
  console.log(textKey);
  genbtn.classList.add("hide");
  data = Text[textKey];
  para.textContent = data;
  wordChecker(data);
  setTimeout(start(), 3000);
  userReset.disabled = false;
  timerCountStop.disabled = false;
  ifActive = false;
  userInputText.focus();
  // new line adding
  // new line ending
}
genbtn.addEventListener("click", generateTxt);

// Word checker how many words are there in any text
// This wordchecker part have done by gpt cause my logic has failed to count the words properly that programe always count more that actual words

const wordChecker = (text) => {
  wordsArray = text.split(/([ ,.!?]+)/);
  userInputedWords = wordsArray.length;
  console.log(`Total words: ${userInputedWords}`);
};

// Timer for user
const start = () => {
  currenTime = setInterval(() => {
    sec++;
    if (sec === 60) {
      sec = 0;
      min++;
      stop();
    }
    if (sec < 10) {
      timer.innerText = `${min}:0${sec}`;
    } else {
      timer.innerText = `${min}:${sec}`;
    }
  }, 1000);
};

// stop function

const stop = () => {
  clearInterval(currenTime);
  result.classList.remove("hide");
  userinputBox.classList.add("hide");
  timerCountStop.disabled = true;
  AcuracyTest(userInputText.value);
  document.querySelector(
    "#resultExp"
  ).innerText = `You typed ${userInputedWords} words in ${min} minutes and ${sec} seconds. Your speed is ${speedWPM} WPM`;
};
timerCountStop.addEventListener("click", stop);

// speedchecker function

function speedCheck() {
  if (userInputText.value === "") {
    alert("Please enter some text first!");
  } else {
    if (min === 1) {
      alert("Time's up!");
      wordChecker(userInputText.value);
      let second = min * 60 + sec; // 1 * 60 + 0 this will happen
      if (second > 0) {
        speedWPM = Math.floor((userInputedWords * 60) / second);
        console.log(`Speed: ${speedWPM} WPM`);
      } else {
        console.log("Cannot calculate speed, time is zero.");
      }
    } else {
      wordChecker(userInputText.value);
      let second = min * 60 + sec; // 1 * 60 + 0 this will happen for a full minute
      if (second > 0) {
        speedWPM = Math.floor((userInputedWords * 60) / second);
        console.log(`Speed: ${speedWPM} WPM`);
      } else {
        console.log("Cannot calculate speed, time is zero.");
      }
    }
  }
}

// Reset fenction

const reset = () => {
  ifActive = true;
  userInputText.value = "";
  para.textContent = "";
  console.log("reset!");
  clearInterval(currenTime);
  timer.innerText = "00:00";
  sec = 0;
  min = 0;
  timerCountStop.disabled = true;
  userInputText.disabled = true;
  userinputBox.classList.add("hide");
  result.classList.add("hide");
  genbtn.classList.remove("hide");
};
userReset.addEventListener("click", reset);

// accuracy test

const AcuracyTest = (userinput) => {
  if (!userInputText) {
    alert("Please enter some text first!");
    returb;
  } else {
    let userArray = userinput.split(/([ ,.!?]+)/);
    console.log(`userArray lenth is ${userArray.length}`);
    let userInputArray = wordsArray.slice(0, userArray.length);
    if (userInputArray === userArray) {
      console.log("You typed correctly");
      speedCheck()
    } else {
      console.log("You typed wrong");
      speedCheck()
    }
  }
};

if (ifActive) {
  userReset.disabled = true;
} else {
  userReset.disabled = false;
}
