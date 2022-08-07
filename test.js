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
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  if (playerSelection == computerSelection) {
    return "Draw both selected same";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    return "You lose ! paper beats rock";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return "You Win ! paper beats rock";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    return "You lose ! rock beats scissors";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    return "You Win ! rock beats scissors";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    return "You lose ! scissors beats paper";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    return "You Win ! scissors beats paper";
  } else {
    return "some error !";
  }
}

computer = getComputerChoice();

console.log(playRound("Rock", computer));
console.log(playRound("scissors", computer));
console.log(playRound("paper", computer));
