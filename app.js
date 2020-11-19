let dairy = [{ category: "Dairy", name: "Cheese" }, { category: "Dairy", name: "Milk" }, { category: "Dairy", name: "Yougurt" }, { category: "Dairy", name: "Butter" }];

let produce = [{ category: "Produce", name: "Apple", }, { category: "Produce", name: "Banana" }];

// let meat = [{ category: "Meat", name: "Chicken" }, { category: "Meat", name: "Beef" }, { category: "Meat", name: "Pork" }];

let drink = [{ category: "Beverages", name: "Coffee" }, { category: "Beverages", name: "Tea" }, { category: "Beverages", name: "Juice" }, { category: "Beverages", name: "Water" }, { category: "Beverages", name: "Soda" }];

let btn = document.querySelector('#btn');
let sel = document.querySelector("select");
btn.onclick = (event) => {
  let cat = sel.value;
}
if (cat === dairy) {
  console.log(dairy)
}

