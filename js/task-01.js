const titles = document.querySelectorAll("h2").length;
console.log("Number of categories:", titles);

const items = document.querySelectorAll("li.item");
for (const item of items) {
    const category = item.firstElementChild.textContent;
    const elements = item.querySelectorAll("li").length;
    console.log(`Category: ${category} \n Elements: ${elements}`);
}
