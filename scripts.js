const rockRaccoon = document.querySelector(".raccoon__rock");
const paperFox = document.querySelector(".fox__paper");
const scissorsPanda = document.querySelector(".red-panda__scissors");
const choices = ["Rock", "Paper", "Scissors"];
const selection = document.querySelector(".glitch");
const score = document.querySelector(".score__board");
const fightContext = document.querySelector(".fight__context");

rockRaccoon.addEventListener("click", () => {
  let playerChoice = getPlayerSelection(choices[0]);
  playRound(playerChoice, getComputerChoice());
  getScore(playerChoice);
});
paperFox.addEventListener("click", () => {
  let playerChoice = getPlayerSelection(choices[1]);
  playRound(playerChoice, getComputerChoice());
  getScore(playerChoice);
});
scissorsPanda.addEventListener("click", () => {
  let playerChoice = getPlayerSelection(choices[2]);
  playRound(playerChoice, getComputerChoice());
  getScore(playerChoice);
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

let playerScore = 0;
let computerScore = 0;
function playRound(playerSelection, computerChoice) {
  if (playerSelection === computerChoice) {
    console.log("It Is a Tie!");
    if (playerSelection == choices[0]) {
      fightContext.children[0].textContent = `Both of you have chosen a Raccoon, they hug it out.`;
    } else if (playerSelection == choices[1]) {
      fightContext.children[0].textContent = `Both of you have chosen a Fox, they snuggle it out.`;
    } else {
      fightContext.children[0].textContent = `Both of you have chosen a Red Panda, they cuddle it out.`;
    }
  } else if ((playerSelection == choices[0]) & (computerChoice == choices[1])) {
    // LOST
    computerScore++;
    fightContext.children[0].textContent = "Raccoon is destroyed by Fox!";
  } else if ((playerSelection == choices[0]) & (computerChoice == choices[2])) {
    // WON
    playerScore++;
    fightContext.children[0].textContent = "Raccoon decimates Red Panda!";
  } else if ((playerSelection == choices[1]) & (computerChoice == choices[2])) {
    // LOST
    computerScore++;
    fightContext.children[0].textContent = "Fox is slashed by Red Panda!";
  } else if ((playerSelection == choices[1]) & (computerChoice == choices[0])) {
    // WON
    playerScore++;
    fightContext.children[0].textContent = "Fox annihilates Raccoon!";
  } else if ((playerSelection == choices[2]) & (computerChoice == choices[0])) {
    // LOST
    computerScore++;
    fightContext.children[0].textContent =
      "Red Panda is Obliterated by Raccoon!";
  } else if ((playerSelection == choices[2]) & (computerChoice == choices[1])) {
    // WON
    playerScore++;
    fightContext.children[0].textContent = `Red Panda slaughters Fox!`;
  } else {
    fightContext.children[0].textContent = `Something went wrong...`;
  }
  score.children[0].textContent = `PLAYER:  ${playerScore}`;
  score.children[1].textContent = `COMPUTER:  ${computerScore}`;

  checkEndGame(playerScore, computerScore);
}

function getScore(playerSelection) {
  if (playerSelection) {
    selection.style.display = "none";
    score.style.display = "flex";
    fightContext.children[0].style.display = "flex";
  }
}

function checkEndGame(playerScore, computerScore) {
  if (playerScore === 5 || computerScore === 5) {
    rockRaccoon.style.pointerEvents = "none";
    paperFox.style.pointerEvents = "none";
    scissorsPanda.style.pointerEvents = "none";

    const popup = document.querySelector(".popup__container");
    const popupMessage = document.querySelector(".popup__message");
    const popupButton = document.querySelector(".popup__button");
    popupButton.addEventListener("click", () => {
      popupMessage.textContent = "Lion Is Stinky";
    });

    if (playerScore === 5) {
      popupMessage.textContent = "You Won!";
    } else {
      popupMessage.textContent = "You Lost!";
    }
    popup.style.display = "flex";
  }
}
