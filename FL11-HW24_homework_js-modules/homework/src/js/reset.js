import { counter } from "./counter";

export const reset = () => {
  counter.round = 0;
  counter.userWins = 0;
  counter.compWins = 0;
  document.getElementById("rock").disabled = false;
  document.getElementById("paper").disabled = false;
  document.getElementById("scissors").disabled = false;
  document.getElementById("user-score").innerText = `${counter.userWins}`;
  document.getElementById("comp-score").innerText = `${counter.compWins}`;
  document.getElementById("round").innerText = `${counter.round}`;
  document.getElementById("result-message").innerText = "";
  document.getElementById("result-message").setAttribute("class", "");
};
