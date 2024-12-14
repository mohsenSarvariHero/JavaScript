console.log("scissor");

let textResult = document.querySelector(".textreesult");

// console.log(btnTextAuto)

let points = JSON.parse(localStorage.getItem("points")) || {
  win: 0,
  lost: 0,
  tied: 0,
};

function randomness() {
  let computerselects;
  let randomNumber = Math.random();

  if (randomNumber < 0.3) {
    computerselects = "rock";
  } else if (randomNumber < 0.6) {
    computerselects = "paper";
  } else {
    computerselects = "scissor";
  }
  return computerselects;
}

const rockBtn = document.querySelector(".js-rock");
rockBtn.addEventListener('click', ()=>{
  play('rock')
})
const paperBtn = document.querySelector(".js-paper");
paperBtn.addEventListener('click', ()=>{
  play('paper')
})
const scissorBtn = document.querySelector(".js-scissor");
scissorBtn.addEventListener('click', ()=>{
  play('scissor')
})
function play(input) {
  let computerselect = randomness();

  let result;
  if (input === "rock" && computerselect === "rock") {
    result = "tied";
    points.tied += 1;
  } else if (input === "rock" && computerselect === "paper") {
    result = "lost";
    points.lost += 1;
  } else if (input === "rock" && computerselect === "scissor") {
    result = "win";
    points.win += 1;
  } else if (input === "paper" && computerselect === "rock") {
    result = "win";
    points.win += 1;
  } else if (input === "paper" && computerselect === "paper") {
    result = "tied";
    points.tied += 1;
  } else if (input === "paper" && computerselect === "scissor") {
    result = "lost";
    points.lost += 1;
  } else if (input === "scissor" && computerselect === "rock") {
    result = "lost";
    points.lost += 1;
  } else if (input === "scissor" && computerselect === "paper") {
    result = "win";
    points.win += 1;
  } else if (input === "scissor" && computerselect === "scissor") {
    result = "tied";
    points.tied += 1;
  }
  // textResult.innerHTML = `computer : ${computerselect} , you : ${input} <br > ${result} <br>
  // win : ${points.win} , lost : ${points.lost} , tied : ${points.tied}
  // `
  textResult.innerHTML = `
    <div>
        <p class="imgp"> computer : <img src="${getimage(
          computerselect
        )}  "/> - you : <img src="${getimage(input)}" /></p>
        <p> result : ${result} <br>
        win : ${points.win} , lost : ${points.lost} , tied : ${points.tied}</p>
    </div>
    
    `;

  localStorage.setItem("points", JSON.stringify(points));
}

function getimage(text) {
  const images = {
    rock: "./img/rock.png",
    paper: "./img/paper.png",
    scissor: "./img/scissors.png",
  };
  if (!images[text]) {
    console.error(`No image found for choice: ${text}`);
    return "./img/paper.png";
  }

  return images[text];
}

const elemReset = document.querySelector(".btnreset")
elemReset.addEventListener('click',reset)
function reset() {
  points.win = 0;
  points.lost = 0;
  points.tied = 0;
  localStorage.removeItem("points");
  textResult.innerHTML = `
    win : ${points.win} , lost : ${points.lost} , tied : ${points.tied}
    `;
}

let isAutoPlay = false;
let intervalId;
const autoListen = document.querySelector(".btnAuto");
autoListen.addEventListener('click',autoPlay)
function autoPlay() {
  let btnText = document.querySelector(".btnAuto");
 
  if (!isAutoPlay) {
    intervalId = setInterval(() => {
      btnText.innerHTML = "Stop Play";
      let playerMove = randomness();
      play(playerMove);
    }, 1000);
    isAutoPlay = true;
  } else {
    clearInterval(intervalId);
    btnText.innerHTML = "Auto Play";

    isAutoPlay = false;
  }
}

function stopPlay() {
  isAutoPlay = false;
  return isAutoPlay;
}


document.body.addEventListener('keydown',(e)=>{

  if(e.key.toLowerCase() === 'r'){
    play('rock')
  }else if(e.key.toLowerCase() === 'p'){
    play('paper')
  }else if(e.key.toLowerCase() === 's'){
    play('scissor')
  }else{
    console.log(e.key)
  }
  
})