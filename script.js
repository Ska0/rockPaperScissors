const weaponOfChoice = ["rock", "paper", "scissors"];
let playerScore = 0;
let roundCount = 0;
let computerScore = 0;

function computerPlay() {
  return weaponOfChoice[Math.floor(Math.random() * weaponOfChoice.length)];
}

const btns = document.querySelectorAll(".btn");
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(e.target.id);
      return round(e.target.id, computerPlay());
});
});
let headerInfo = document.getElementById('header').childNodes;
let scoreResults = document.getElementById('results').childNodes;

let roundContainer = document.createElement('h3');

function round(playerChoice, computerPick) {
  scoreResults[0].innerText = "Round: " + roundCount; 
  roundCount++;
  if (playerChoice === computerPick) {
    roundCount--;
    headerInfo[0].innerText = "You Tied, why don't you try again?";
    headerInfo[1].innerText = playerChoice;
    headerInfo[3].innerText = computerPick;
  } else if (playerChoice === "rock" && computerPick != "paper") {
  playerScore++;
  headerInfo[0].innerText = "Nice one! You won that round";
  headerInfo[1].innerText = playerChoice;
  headerInfo[3].innerText = computerPick;
  } else if (playerChoice === "paper" && computerPick != "scissors") {
    playerScore++;
    headerInfo[0].innerText = "Nice one! You won that round!";
    headerInfo[1].innerText = playerChoice;
    headerInfo[3].innerText = computerPick;
  } else if (playerChoice === "scissors" && computerPick != "rock") {
    playerScore++;
    headerInfo[0].innerText = "Nice one! You won that round!"
    headerInfo[1].innerText = playerChoice;
    headerInfo[3].innerText = computerPick;
  } else {
    computerScore++;
    headerInfo[0].innerText = "You lost this round buddy.";
    headerInfo[1].innerText = computerPick;
    headerInfo[3].innerText = playerChoice;
  }

  scoreResults[0].innerText = "Round: " + roundCount; 
  scoreResults[1].innerText = "Player: " + playerScore;
  scoreResults[2].innerText = "Computer: " + computerScore;
  if (playerScore >= 5) {
    playerScore = 0;
    computerScore = 0;
    roundCount = 0;
    alert('You Win!');
  } else if (computerScore >= 5) {
    playerScore = 0;
    computerScore = 0;
    roundCount = 0;
    alert('You Lose!');
  }
}


