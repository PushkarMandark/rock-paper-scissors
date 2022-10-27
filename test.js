let round = 0;
let humanScore = 0;
let compScore = 0;

const result_div = document.querySelector(".show_result");
const round_div = document.querySelector(".show_round");
const humanScoreDiv = document.querySelector(".show_score_human");
const compScoreDiv = document.querySelector(".show_score_computer");

humanScoreDiv.textContent = humanScore;
compScoreDiv.textContent = compScore;
round_div.textContent = round;

document.querySelector(".rock").addEventListener("click", () => {
  result_div.textContent = playRound("rock", getComputerChoice());
});

document.querySelector(".paper").addEventListener("click", () => {
  result_div.textContent = playRound("paper", getComputerChoice());
});

document.querySelector(".scissor").addEventListener("click", () => {
  result_div.textContent = playRound("scissors", getComputerChoice());
});

function getComputerChoice() {
  const randNum = Math.floor(Math.random() * 3);
  switch (randNum) {
    case 0:
      return "rock";

    case 1:
      return "paper";

    case 2:
      return "scissors";

    default:
      "error nothing ";
  }
}

function playRound(playerSelection, computerSelection) {
  if (round < 5) {
    round += 1;
    round_div.textContent = round;

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection == computerSelection) {
      return `"Draw both selected same" ${playerSelection}`;
    } else if (playerSelection == "rock" && computerSelection == "paper") {
      updateCompScore();
      return "You lose ! paper beats rock";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
      updateHumanScore();
      return "You Win ! paper beats rock";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
      updateCompScore();
      return "You lose ! rock beats scissors";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
      updateHumanScore();
      return "You Win ! rock beats scissors";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
      updateCompScore();
      return "You lose ! scissors beats paper";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
      updateHumanScore();
      return "You Win ! scissors beats paper";
    } else {
      return "some error !";
    }
  } else {
    round = 0;
    round_div.textContent = "5 round over";
    if (humanScore > compScore) {
      humanScore = 0;
      compScore = 0;
      return "You won";
    } else if (humanScore < compScore) {
      humanScore = 0;
      compScore = 0;
      return "You Lost Computer Wins";
    } else if (humanScore == compScore) {
      humanScore = 0;
      compScore = 0;
      return "Game Draw";
    } else {
      humanScore = 0;
      compScore = 0;
      return "Some Issue came !!";
    }
  }
}

function updateCompScore() {
  compScore++;
  return (compScoreDiv.textContent = compScore);
}

function updateHumanScore() {
  humanScore++;
  return (humanScoreDiv.textContent = humanScore);
}

// old function

// function game() {
//   for (let i = 0; i < 5; i++) {
//     let computer = getComputerChoice();
//     console.log(playRound(window.prompt(), computer));
//   }
// }

// game();
