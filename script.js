function getComputerChoice() {
  choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    default:
      return "scissors";
  }
}

function getHumanChoice() {
  userChoice = prompt("Please input, one of rock, paper or scissors");
  return userChoice;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    // Rock Paper Scissors
    // Rock > Scissors & Paper > Rock & Scissors > Paper
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
      console.log("Both picked the same " + computerChoice);
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      console.log("You won! " + humanChoice + " beats " + computerChoice + ".");
    } else {
      computerScore++;
      console.log(
        "You lose! " + computerChoice + " beats " + humanChoice + ".",
      );
    }
  }

  for (rounds = 0; rounds < 5; rounds++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }

  if (humanScore > computerScore) {
    console.log("Hurray! You won!");
  } else if (computerScore > humanScore) {
    console.log("Womp! Womp! You lose!");
  } else {
    console.log("It's a tough battle, but nobody won!");
  }
}

playGame();
