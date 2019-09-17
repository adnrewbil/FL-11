export const result = (text, status) => {
  document.getElementById("result-message").innerText = text;
  document.getElementById("result-message").setAttribute("class", status);
};
