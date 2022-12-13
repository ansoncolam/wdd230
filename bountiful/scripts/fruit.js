const requestURL = "https://brotherblazzard.github.io/canvas-content/fruit.json";
const flist = document.querySelector(".flist");

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject)
    const fruits = jsonObject;
    fruits.forEach(displayFruit);
  });


function displayFruit(fruits) {
    let f_check = document.createElement("input");
    let f_name = document.createElement("label");
    let f_carb = document.createElement("div");
    let f_protein = document.createElement("div");
    let f_fat = document.createElement("div");
    let f_cal = document.createElement("div");
    let f_sugar = document.createElement("div");

    f_check.setAttribute("type", "checkbox");
    f_check.setAttribute("class", "f_check");
    f_check.setAttribute("name", `${fruits.name}`);
    f_name.textContent = `${fruits.name}`;

    f_carb.textContent = `${fruits.nutritions.carbohydrates}`;
    f_carb.setAttribute("class", "f_info");

    f_protein.textContent = `${fruits.nutritions.protein}`;
    f_protein.setAttribute("class", "f_info");

    f_fat.textContent = `${fruits.nutritions.fat}`;
    f_fat.setAttribute("class", "f_info");
x
    f_cal.textContent = `${fruits.nutritions.calories}`;
    f_cal.setAttribute("class", "f_info");

    f_sugar.textContent = `${fruits.nutritions.sugar}`;
    f_sugar.setAttribute("class", "f_info");

    // logo.setAttribute("loading", "lazy");
    flist.appendChild(f_check);
    flist.appendChild(f_name);
    flist.appendChild(f_carb);
    flist.appendChild(f_protein);
    flist.appendChild(f_fat);
    flist.appendChild(f_cal);
    flist.appendChild(f_sugar);

  }
