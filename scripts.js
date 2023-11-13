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
    fightContext.children[0].style.color = "yellow"; // or any color you want for a tie
  } else if ((playerSelection == choices[0]) & (computerChoice == choices[1])) {
    // LOST
    computerScore++;
    fightContext.children[0].textContent =
      "Computer has chosen Fox, Raccoon is destroyed by Fox!";
    fightContext.children[0].style.color = "red";
  } else if ((playerSelection == choices[0]) & (computerChoice == choices[2])) {
    // WON
    playerScore++;
    fightContext.children[0].textContent =
      "Computer has chosen Red Panda, Raccoon decimates Red Panda!";
    fightContext.children[0].style.color = "#32de84";
  } else if ((playerSelection == choices[1]) & (computerChoice == choices[2])) {
    // LOST
    computerScore++;
    fightContext.children[0].textContent =
      "Computer has chosen Red Panda, Fox is slashed by Red Panda!";
    fightContext.children[0].style.color = "red";
  } else if ((playerSelection == choices[1]) & (computerChoice == choices[0])) {
    // WON
    playerScore++;
    fightContext.children[0].textContent =
      "Computer has chosen Raccoon, Fox annihilates Raccoon!";
    fightContext.children[0].style.color = "#32de84";
  } else if ((playerSelection == choices[2]) & (computerChoice == choices[0])) {
    // LOST
    computerScore++;
    fightContext.children[0].textContent =
      "Computer has chosen Raccoon, Red Panda is Obliterated by Raccoon!";
    fightContext.children[0].style.color = "red";
  } else if ((playerSelection == choices[2]) & (computerChoice == choices[1])) {
    // WON
    playerScore++;
    fightContext.children[0].textContent =
      "Computer has chosen Fox, Red Panda slaughters Fox!";
    fightContext.children[0].style.color = "#32de84";
  } else {
    fightContext.children[0].textContent = "Something went wrong...";
    fightContext.children[0].style.color = "purple"; // or any color you want for an error
  }
  score.children[0].textContent = `PLAYER:  ${playerScore}`;
  score.children[1].textContent = `COMPUTER:  ${computerScore}`;
  getSelectionClass(playerSelection, computerChoice);
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
    popupButton.addEventListener("click", resetGame);

    if (playerScore === 5) {
      popupMessage.textContent = "You Won!";
    } else {
      popupMessage.textContent = "You Lost!";
    }
    popup.style.display = "flex";
  }
}
function resetGame() {
  // Reset scores
  playerScore = 0;
  computerScore = 0;

  // Reset UI elements
  fightContext.children[0].textContent = "";
  score.children[0].textContent = `PLAYER:  ${playerScore}`;
  score.children[1].textContent = `COMPUTER:  ${computerScore}`;
  selection.style.display = "block";
  score.style.display = "none";

  // Enable buttons
  rockRaccoon.style.pointerEvents = "auto";
  paperFox.style.pointerEvents = "auto";
  scissorsPanda.style.pointerEvents = "auto";

  // Hide popup
  const popup = document.querySelector(".popup__container");
  popup.style.display = "none";
}

function getSelectionClass(playerSelection, computerChoice) {
  // Remove any existing classes
  rockRaccoon.classList.remove("player", "computer", "tie");
  paperFox.classList.remove("player", "computer", "tie");
  scissorsPanda.classList.remove("player", "computer", "tie");

  if (playerSelection === computerChoice) {
    // It's a tie
    rockRaccoon.classList.add("tie");
    paperFox.classList.add("tie");
    scissorsPanda.classList.add("tie");
  } else if (
    (playerSelection === "Rock" && computerChoice === "Scissors") ||
    (playerSelection === "Paper" && computerChoice === "Rock") ||
    (playerSelection === "Scissors" && computerChoice === "Paper")
  ) {
    // Player wins
    rockRaccoon.classList.add("player");
    paperFox.classList.add("player");
    scissorsPanda.classList.add("player");
  } else {
    // Computer wins
    rockRaccoon.classList.add("computer");
    paperFox.classList.add("computer");
    scissorsPanda.classList.add("computer");
  }
}
