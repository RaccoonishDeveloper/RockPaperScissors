const rockRaccoon = document.querySelector(".raccoon__rock");
const paperFox = document.querySelector(".fox__paper");
const scissorsPanda = document.querySelector(".red-panda__scissors");
const choices = ["Rock", "Paper", "Scissors"];

rockRaccoon.addEventListener("click", () => {
  playRound(getPlayerSelection(choices[0]), getComputerChoice());
});
paperFox.addEventListener("click", () => {
  playRound(getPlayerSelection(choices[1]), getComputerChoice());
});
scissorsPanda.addEventListener("click", () => {
  playRound(getPlayerSelection(choices[2]), getComputerChoice());
});

function getPlayerSelection(selection) {
  console.log(selection);
  return selection;
}

function getComputerChoice() {
  const random = Math.floor(Math.random() * choices.length);
  console.log("The Computer chose: " + choices[random]);
  return choices[random];
}

function playRound(playerSelection, computerChoice) {
  if (playerSelection === computerChoice) {
    alert("It Is a Tie!");
  } else if ((playerSelection == choices[0]) & (computerChoice == choices[1])) {
    alert("LOST");
  } else if ((playerSelection == choices[0]) & (computerChoice == choices[2])) {
    alert("WON");
  } else if ((playerSelection == choices[1]) & (computerChoice == choices[2])) {
    alert("LOST");
  } else if ((playerSelection == choices[1]) & (computerChoice == choices[0])) {
    alert("WON");
  } else if ((playerSelection == choices[2]) & (computerChoice == choices[0])) {
    alert("LOST");
  } else if ((playerSelection == choices[2]) & (computerChoice == choices[1])) {
    alert("WON");
  } else {
    alert("ERROR");
  }
}
