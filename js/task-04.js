function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const createBtn = document.querySelector("#controls button[data-create]");
const destroyBtn = document.querySelector("#controls button[data-destroy]");
const boxes = document.querySelector("#boxes");
const handler = () => {
  const amount = document.querySelector("#controls input[type=number]").value;
  boxes.innerHTML = null;
  createBoxes(amount);
};
const removeHandler = () => {
  boxes.innerHTML = null;
};
createBtn.addEventListener("click", handler);
destroyBtn.addEventListener("click", removeHandler);
function createBoxes(amount) {
  if (amount >= 1 && amount <= 100) {
      for (let i = 1; i <= amount; i++) {
          boxes.insertAdjacentHTML(
              "beforeend",
              `<div style="width:${Math.floor(i * 10 + 20)}px; 
      height: ${Math.floor(i * 10 + 20)}px; 
      background-color:${getRandomHexColor()}; 
      margin:10px; 
      "></div>`
          );
      }
  } else {
      boxes.insertAdjacentHTML("beforeend", `<p>Wpisz liczbę od 1 do 100</p>`);
  }
}