let result = document.querySelector(".result");
let para = document.querySelector(".para");
let userinputBox = document.querySelector(".userinp");
let genbtn = document.querySelector(".generate");
let dispTimer = document.querySelector(".timerinto");
let data;
let totalWords = 0;
let arr = [];
const URL =
  "https://baconipsum.com/api/?type=meat-and-filler&paras=1&format=text";

const genpara = async () => {
  userinputBox.classList.remove("noshow");
  let response = await fetch(URL);
  data = await response.text();
  para.textContent = data;
  genbtn.classList.add("noshow");

  // Pass the data (string) to the wordChecker function instead of spreading into characters
  wordChecker(data);
};

// Check how many words are in the random text generated
const wordChecker = (text) => {
  const wordsArray = text.split(/\s+/); // Split text by spaces (including multiple spaces)
  const filteredWords = wordsArray.filter((word) => word.length > 0); // Filter out empty strings
  totalWords = filteredWords.length;
  console.log(`Total words: ${totalWords}`);
};

//Timer for user (actually not timer it is a stopwatch for now!)
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

const start = () => {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(update, 10);
    console.log(timer);
    isRunning = true;
  }
};
const stop = () => {
  alert("HELLO THERE!!");
};
const reset = () => {};
const update = () => {
  const currenTime = Date.now();
  elapsedTime = currenTime - startTime;

  let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
  let seconds = Math.floor((elapsedTime / 1000) % 60);

  hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");

  dispTimer.textContent = `${hours}:${minutes}:${seconds}`;
};
