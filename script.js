const weaponOfChoice = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
function computerPlay() {
  return weaponOfChoice[Math.floor(Math.random() * weaponOfChoice.length)];
}

function playerPlay() {
  let pick = prompt("rock, paper, or scissors?");
  pick = pick.toLowerCase(length);
  return pick;
}

function game() {
  for (let i = 0; i < 5; i++) {
    round();
  }
  if (playerScore > computerScore) {
    return alert(
      "You Win! Final score - Player: " +
        playerScore +
        " Computer: " +
        computerScore
    );
  } else if (playerScore < computerScore) {
    return alert(
      "You Lose! Final score - Player: " +
        playerScore +
        " Computer: " +
        computerScore
    );
  }
}

function round(playerPick, computerPick) {
  playerPick = playerPlay();
  computerPick = computerPlay();
  if (playerPick === computerPick) {
    console.log("You Picked: " + playerPick);
    console.log("The Computer Picked: " + computerPick);
    console.log("It's a tie! choose again!");
    playerPick = playerPlay();
  } else if (playerPick === "rock" && computerPick != "paper") {
    console.log("You Picked: " + playerPick);
    console.log("The Computer Picked: " + computerPick);
    console.log("you win! your score went up by 1!");
    playerScore++;
  } else if (playerPick === "paper" && computerPick != "scissors") {
    console.log("You Picked: " + playerPick);
    console.log("The Computer Picked: " + computerPick);
    console.log("you win! your score went up by 1!");
    playerScore++;
  } else if (playerPick === "scissors" && computerPick != "rock") {
    console.log("You Picked: " + playerPick);
    console.log("The Computer Picked: " + computerPick);
    console.log("you win! your score went up by 1!");
    playerScore++;
  } else {
    console.log("You Picked: " + playerPick);
    console.log("The Computer Picked: " + computerPick);
    console.log("you lose! " + computerPick + "beats " + playerPick);
    computerScore++;
  }
}
