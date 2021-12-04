
const weaponOfChoice = ["rock", "paper", "scissors"];
let roundCount = 0;
let score = 0;
function computerPlay() {
      
         return weaponOfChoice[Math.floor(Math.random()*weaponOfChoice.length)];
   };

   function playerPlay() {
     let pick = prompt("rock, paper, or scissors?")
      return pick;
   }

  function round() {
     let playerPick = playerPlay();
     let computerPick = computerPlay();
     console.log("round " + roundCount);
     console.log("your score is " + score);
     if (playerPick === computerPick) {
        console.log("You Picked: " + playerPick);
        console.log("The Computer Picked: " + computerPick);
        console.log("It's a tie! choose again!");
        return round();
     } else if (playerPick === "rock" && computerPick != "paper") {
        console.log("You Picked: " + playerPick);
        console.log("The Computer Picked: " + computerPick);
        console.log("you win! your score went up by 1!");
        roundCount++; 
         score++;
         return round();
     } else if (playerPick === "paper" && computerPick != "scissors") {
      console.log("You Picked: " + playerPick);
      console.log("The Computer Picked: " + computerPick);
      console.log("you win! your score went up by 1!");
      roundCount++;
       score++;
       return round();
     } else if (playerPick === "scissors" && computerPick != "rock") {
        console.log("You Picked: " + playerPick);
        console.log("The Computer Picked: " + computerPick);
        console.log("you win! your score went up by 1!");
        roundCount++;
        score++;
        return round();
     } else {
      console.log("You Picked: " + playerPick);
      console.log("The Computer Picked: " + computerPick);
      console.log("you lose!")
      return round();
     };
  };