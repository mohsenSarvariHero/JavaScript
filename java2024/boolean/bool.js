// let win = 0;
// let loss = 0;
// let tied = 0 ;
let score = JSON.parse(localStorage.getItem("score")) || {
  win: 0,
  loss: 0,
  tied: 0,
};
let showscores = document.querySelector(".showscore");
showscores.innerHTML = `win : ${score.win} , loss : ${score.loss}  . tied : ${score.tied}`
let showselects = document.querySelector(".showselect");
// if(score === null){
//   score={
//     win : 0,
//     loss : 0,
//     tied : 0,
//   }
// }
// if(!score){
//   score={
//     win : 0,
//     loss : 0,
//     tied : 0,
//   }
// }
console.log(score);
console.log(score.loss);
console.log(localStorage.getItem("score"));
console.log(JSON.parse(localStorage.getItem("score")));

const play = (input) => {
  const randnumber = Math.random();
  console.log(randnumber);
  let randomshape;
  if (0 <= randnumber < 0.3) {
    randomshape = "rock";
  } else if (0.3 <= randnumber < 0.6) {
    randomshape = "paper";
  } else {
    randomshape = "scissor";
  }
  console.log(randomshape);
  let result;

  if (input == "rock") {
    if (randomshape === "scissor") {
      result = "you win the game";
      score.win += 1;
    } else if (randomshape === "paper") {
      result = "You lost the game";
      score.loss += 1;
    } else {
      result = "You are tie";
      score.tied += 1;
    }
  }
  if (input == "paper") {
    if (randomshape === "scissor") {
      result = "you lost the game";
      score.loss += 1;
    } else if (randomshape === "paper") {
      result = "You are tie the game";
      score.tied += 1;
    } else {
      result = "You are win the game";
      score.win += 1;
    }
  }
  if (input == "scissor") {
    if (randomshape === "scissor") {
      result = "you are tied the game";
      score.tied += 1;
    } else if (randomshape === "paper") {
      result = "You win the game";
      score.win += 1;
    } else {
      result = "You are lost the game";
      score.loss += 1;
    }
  }
  localStorage.setItem("score", JSON.stringify(score));
  console.log(randomshape === input);
  // alert(
  //   `you select ${input} and the computer select ${randomshape} and the result is : ${result} \nwin : ${score.win} , lost : ${score.loss} , tied : ${score.tied}`
  // );
  showselects.innerHTML =  `you select : ${input} <br/> the computer select : ${randomshape} <br/> the result is :<b>${result}</b>  `

  showresult()
};

// function reset() {
//   score.win = 0;
//   score.loss = 0;
//   score.tied = 0;
//   localStorage.removeItem("score")
//   alert(`loss , win and tied reset to 0 `);
// }

console.log(5 > 0 ? "5 is grater than two" : " 5 is not grater nmber");

console.log(`${"mohsen ".repeat(3)}`);

console.log("this section for coin game");

let scoreCoin = JSON.parse(localStorage.getItem("scoreCoin")) ||{
  win : 0,
  lost : 0,
} 

let showcoin = document.querySelector(".showscoins");

console.log(JSON.parse(localStorage.getItem("scoreCoin")) );
function coinFlips(input) {
  let randomCoin = Math.random();
  // console.log(randomCoin)
  let result;
  let computerGuess;
  if (randomCoin <= 0.5) {
    computerGuess = "head";
  } else {
    computerGuess = "tail";
  }

  if (input === "head" && computerGuess === "head") {
    result = "guess true";
    scoreCoin.win += 1;
  } else if (input === "head" && computerGuess === "tail") {
    result = "guess false";
    scoreCoin.lost += 1;
  } else if (input === "tail" && computerGuess === "tail") {
    result = "guess true";
    scoreCoin.win += 1;
  } else {
    result = "guess false";
    scoreCoin.lost += 1;
  }

  localStorage.setItem("scoreCoin", JSON.stringify(scoreCoin));
  console.log(
    `your geuss is ${input} and the computer is ${computerGuess} : \n result is : ${result}`
  );
  showcoin.innerHTML = `your geuss is ${input} and the computer is ${computerGuess} : <br /> result is : <br/> ${result} <br /> <b> win :  ${scoreCoin.win} , loss : ${scoreCoin.lost} </b>`


}

function resetcoin(){
  scoreCoin.win = 0 ,
  scoreCoin.lost = 0 ,
  localStorage.removeItem("scoreCoin")
  showcoin.innerHTML=` win : ${ scoreCoin.win}, lost: ${scoreCoin.lost}`
}
function reset() {
  score.win = 0;
  score.loss = 0;
  score.tied = 0;
  localStorage.removeItem("score");
  // alert(`loss , win and tied reset to 0 `);
  showresult()
}




function showresult() {
  
  showscores.innerHTML=''
  // console.log(showscores)

  for (indexscore in score) {
    showscores.innerHTML += `${indexscore} : ${score[indexscore]} ,  `;
  }
}
