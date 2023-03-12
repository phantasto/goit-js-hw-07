const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector("#ingredients");
for (const ingredient of ingredients) {
  const item = document.createElement("li");
  item.classList.add("item");
  item.textContent = ingredient;
  list.append(item);
  console.log(item);
}