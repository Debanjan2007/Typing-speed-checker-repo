import { Text }  from "./RandomText.js";
let result = document.querySelector(".result");
let para = document.querySelector(".para");
let userinputBox = document.querySelector(".userinp");
let genbtn = document.querySelector(".generate");
let timer = document.querySelector("#timer");
let timerCount = document.querySelector(".start");
let data;
let totalWords = 0;
let textKey = 0 ;

function generateTxt() {
  userinputBox.classList.remove("noshow");
  textKey = Math.floor(Math.random() * 9);
  console.log(textKey);
  genbtn.classList.add("noshow");
  data = Text[textKey] ;
  console.log(data);
  para.textContent = data;
  wordChecker(data) ;
  const date = new Date();
  const timeZone = date;
  console.log(timeZone);  

}
genbtn.addEventListener("click", generateTxt);


const wordChecker = (text) => {
  const wordsArray = text.split(/\s+/); 
  const filteredWords = wordsArray.filter((word) => word.length > 0); 
  totalWords = filteredWords.length;
  console.log(`Total words: ${totalWords}`);
};

// Timer for user
const start = () => {
  let sec = 0 ;
  let min = 0 ;
  let currenTime = 0 ;
  currenTime = setInterval(() => {
    sec++ ;
    if(sec === 60){
      sec = 0 ;
      min++ ;
    }
    timer.textContent = `${min} : ${sec}`;
  }, 1000);
}

timerCount.addEventListener("click", start);
// //Timer for user (actually not timer it is a stopwatch for now!)
// let timer = null;
// let startTime = 0;
// let elapsedTime = 0;
// let isRunning = false;

// const start = () => {
//   if (!isRunning) {
//     startTime = Date.now() - elapsedTime;
//     timer = setInterval(update, 10);
//     console.log(timer);
//     isRunning = true;
//   }
// };
// const stop = () => {
//   alert("HELLO THERE!!");
// };
// const reset = () => {};
// const update = () => {
//   const currenTime = Date.now();
//   elapsedTime = currenTime - startTime;

//   let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
//   let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
//   let seconds = Math.floor((elapsedTime / 1000) % 60);

//   hours = String(hours).padStart(2, "0");
//   minutes = String(minutes).padStart(2, "0");
//   seconds = String(seconds).padStart(2, "0");

//   dispTimer.textContent = `${hours}:${minutes}:${seconds}`;
// };
