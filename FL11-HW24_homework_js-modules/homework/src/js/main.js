import { computerChoice } from "./computer-choice";
import { reset } from "./reset";
import { counter } from "./counter";
import { result } from "./result";

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

const playGame = user => {
  let comp = computerChoice();

  if (user === "rock" && comp === "paper") {
    counter.compWins++;
    result(`You Lost, computer choice paper :(`);
  } else if (user === "rock" && comp === "scissors") {
    counter.userWins++;
    result(`You Won, computer choice scissors :)`);
  } else if (user === "rock" && comp === "rock") {
    result(`Draw, computer choice rock :/`);
  }

  if (user === "paper" && comp === "rock") {
    counter.userWins++;
    result(`You Won, computer choice rock :)`);
  } else if (user === "paper" && comp === "scissors") {
    counter.compWins++;
    result(`You Lost, computer choice scissors :(`);
  } else if (user === "paper" && comp === "paper") {
    result(`Draw, computer choice paper :/`);
  }

  if (user === "scissors" && comp === "paper") {
    counter.userWins++;
    result(`You Won, computer choice paper :)`);
  } else if (user === "scissors" && comp === "rock") {
    counter.compWins++;
    result(`You Lost, computer choice rock :(`);
  } else if (user === "scissors" && comp === "scissors") {
    result(`Draw, computer choice scissors :/`);
  }

  document.getElementById("user-score").innerText = `${counter.userWins}`;
  document.getElementById("comp-score").innerText = `${counter.compWins}`;
  document.getElementById("round").innerText = `${counter.round}`;

  counter.round++;

  if (counter.userWins === 3 || counter.compWins === 3) {
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
    if (counter.userWins > counter.compWins) {
      result("Congratulations, You WON :))", "win");
    } else {
      result("Sorry... You Lost", "lose");
    }
  }
};
