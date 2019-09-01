import "./game";

let round = 0;
let compWins = 0;
let userWins = 0;

document.getElementById("rock").addEventListener("click", () => {
  playGame("rock");
});
document.getElementById("paper").addEventListener("click", () => {
  playGame("paper");
});
document.getElementById("scissors").addEventListener("click", () => {
  playGame("scissors");
});
document.getElementById("reset").addEventListener("click", () => {
  reset();
});

const reset = () => {
  round = 0;
  userWins = 0;
  compWins = 0;
  document.getElementById("rock").disabled = false;
  document.getElementById("paper").disabled = false;
  document.getElementById("scissors").disabled = false;
  document.getElementById("user-score").innerText = `${userWins}`;
  document.getElementById("comp-score").innerText = `${compWins}`;
  document.getElementById("round").innerText = `${round}`;
  document.getElementById("result-message").innerText = "";
  document.getElementById("result-message").setAttribute("class", "");
};

const computerChoice = () => {
  let makeChoice = Math.floor(Math.random() * 3 + 1);
  if (makeChoice === 1) {
    makeChoice = "rock";
  } else if (makeChoice === 2) {
    makeChoice = "paper";
  } else {
    makeChoice = "scissors";
  }
  return makeChoice;
};

const playGame = user => {
  round++;

  let comp = computerChoice();

  if (user === "rock" && comp === "paper") {
    compWins++;
    result(`You Lost, computer choice paper :(`);
  } else if (user === "rock" && comp === "scissors") {
    userWins++;
    result(`You Won, computer choice scissors :)`);
  } else if (user === "rock" && comp === "rock") {
    result(`Draw, computer choice rock :/`);
  }

  if (user === "paper" && comp === "rock") {
    userWins++;
    result(`You Won, computer choice rock :)`);
  } else if (user === "paper" && comp === "scissors") {
    compWins++;
    result(`You Lost, computer choice scissors :(`);
  } else if (user === "paper" && comp === "paper") {
    result(`Draw, computer choice paper :/`);
  }

  if (user === "scissors" && comp === "paper") {
    userWins++;
    result(`You Won, computer choice paper :)`);
  } else if (user === "scissors" && comp === "rock") {
    compWins++;
    result(`You Lost, computer choice rock :(`);
  } else if (user === "scissors" && comp === "scissors") {
    result(`Draw, computer choice scissors :/`);
  }
  document.getElementById("user-score").innerText = `${userWins}`;
  document.getElementById("comp-score").innerText = `${compWins}`;
  document.getElementById("round").innerText = `${round}`;

  if (userWins === 3 || compWins === 3) {
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
    if (userWins > compWins) {
      result("Congratulations, You WON :))", "win");
    } else {
      result("Sorry... You Lost", "lose");
    }
  }
};

const result = (text, status) => {
  document.getElementById("result-message").innerText = text;
  document.getElementById("result-message").setAttribute("class", status);
};
