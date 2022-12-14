const requestURL = "https://brotherblazzard.github.io/canvas-content/fruit.json";
const flist = document.querySelector(".flist");

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const fruits = jsonObject;
    fruits.forEach(displayFruit);
  });

let i = 1;

function displayFruit(fruits) {

  let f_check = document.createElement("input");
  let f_name = document.createElement("label");
  let f_carb = document.createElement("div");
  let f_protein = document.createElement("div");
  let f_fat = document.createElement("div");
  let f_cal = document.createElement("div");
  let f_sugar = document.createElement("div");

  f_check.setAttribute("type", "checkbox");
  f_check.setAttribute("class", "checkbox");
  f_check.setAttribute("id", `checkbox_${i}`);
  f_check.setAttribute("name", `${fruits.name}`);
  f_check.setAttribute("onclick", "checkBoxLimit()");
  f_name.textContent = `${fruits.name}`;

  f_carb.textContent = `${fruits.nutritions.carbohydrates}`;
  f_carb.setAttribute("class", "f_info");
  f_carb.setAttribute("id", `${fruits.name}_carb`);

  f_protein.textContent = `${fruits.nutritions.protein}`;
  f_protein.setAttribute("class", "f_info");
  f_protein.setAttribute("id", `${fruits.name}_protein`);

  f_fat.textContent = `${fruits.nutritions.fat}`;
  f_fat.setAttribute("class", "f_info");
  f_fat.setAttribute("id", `${fruits.name}_fat`);

  f_cal.textContent = `${fruits.nutritions.calories}`;
  f_cal.setAttribute("class", "f_info");
  f_cal.setAttribute("id", `${fruits.name}_cal`);

  f_sugar.textContent = `${fruits.nutritions.sugar}`;
  f_sugar.setAttribute("class", "f_info");
  f_sugar.setAttribute("id", `${fruits.name}_sugar`);

  flist.appendChild(f_check);
  flist.appendChild(f_name);
  flist.appendChild(f_carb);
  flist.appendChild(f_protein);
  flist.appendChild(f_fat);
  flist.appendChild(f_cal);
  flist.appendChild(f_sugar);

  i += 1;
}


function getFruit() {

  let j = 0;
  var fruit = [];
  let fruit_1 = document.createElement("li");
  let fruit_2 = document.createElement("li");
  let fruit_3 = document.createElement("li");

  for (let i = 1; i < 40; i++) {
    var checkBox = document.getElementById(`checkbox_${i}`);
    if (checkBox.checked == true) {
      fruit[j] = checkBox.getAttribute("name");
      j += 1
    } 
  }

  let your_fruit = document.getElementById("your_fruit")
  fruit_1.innerHTML = fruit[0];
  fruit_2.innerHTML = fruit[1];
  fruit_3.innerHTML = fruit[2];
  let carb_total = document.createElement("li");
  let protein_total = document.createElement("li");
  let fat_total = document.createElement("li");
  let cal_total = document.createElement("li");
  let sugar_total = document.createElement("li");

  if (j == 1) {
    your_fruit.appendChild(fruit_1); 
    var carb_1 = document.getElementById(`${fruit[0]}_carb`).innerText;
    var protein_1 = document.getElementById(`${fruit[0]}_protein`).innerText;
    var fat_1 = document.getElementById(`${fruit[0]}_fat`).innerText;
    var cal_1 = document.getElementById(`${fruit[0]}_cal`).innerText;
    var sugar_1 = document.getElementById(`${fruit[0]}_sugar`).innerText;
    carb_total.innerText = `Total Carbohydrates: ${carb_1}`;
    protein_total.innerText = `Total Protein: ${protein_1}`;
    fat_total.innerText = `Total Fat: ${fat_1}`;
    cal_total.innerText = `Total Calories: ${cal_1}`;
    sugar_total.innerText = `Total Sugar: ${sugar_1}`;
  } else if (j == 2) {
    your_fruit.appendChild(fruit_1); 
    your_fruit.appendChild(fruit_2);
    var carb_1 = document.getElementById(`${fruit[0]}_carb`).innerText;
    var carb_2 = document.getElementById(`${fruit[1]}_carb`).innerText;
    var protein_1 = document.getElementById(`${fruit[0]}_protein`).innerText;
    var protein_2 = document.getElementById(`${fruit[1]}_protein`).innerText;
    var fat_1 = document.getElementById(`${fruit[0]}_fat`).innerText;
    var fat_2 = document.getElementById(`${fruit[1]}_fat`).innerText;
    var cal_1 = document.getElementById(`${fruit[0]}_cal`).innerText;
    var cal_2 = document.getElementById(`${fruit[1]}_cal`).innerText;
    var sugar_1 = document.getElementById(`${fruit[0]}_sugar`).innerText;
    var sugar_2 = document.getElementById(`${fruit[1]}_sugar`).innerText;
    carb_total.innerText = `Total Carbohydrates: ${carb_1 * 1 + carb_2 * 1}`;
    protein_total.innerText = `Total Protein: ${protein_1 * 1 + protein_2 * 1}`;
    fat_total.innerText = `Total Fat: ${fat_1 * 1 + fat_2 * 1}`;
    cal_total.innerText = `Total Calories: ${cal_1 * 1 + cal_2 * 1}`;
    sugar_total.innerText = `Total Sugar: ${sugar_1 * 1 + sugar_2 * 1}`;
  } else {
    your_fruit.appendChild(fruit_1); 
    your_fruit.appendChild(fruit_2);
    your_fruit.appendChild(fruit_3);
    var carb_1 = document.getElementById(`${fruit[0]}_carb`).innerText;
    var carb_2 = document.getElementById(`${fruit[1]}_carb`).innerText;
    var carb_3 = document.getElementById(`${fruit[2]}_carb`).innerText;
    var protein_1 = document.getElementById(`${fruit[0]}_protein`).innerText;
    var protein_2 = document.getElementById(`${fruit[1]}_protein`).innerText;
    var protein_3 = document.getElementById(`${fruit[2]}_protein`).innerText;
    var fat_1 = document.getElementById(`${fruit[0]}_fat`).innerText;
    var fat_2 = document.getElementById(`${fruit[1]}_fat`).innerText;
    var fat_3 = document.getElementById(`${fruit[2]}_fat`).innerText;
    var cal_1 = document.getElementById(`${fruit[0]}_cal`).innerText;
    var cal_2 = document.getElementById(`${fruit[1]}_cal`).innerText;
    var cal_3 = document.getElementById(`${fruit[2]}_cal`).innerText;
    var sugar_1 = document.getElementById(`${fruit[0]}_sugar`).innerText;
    var sugar_2 = document.getElementById(`${fruit[1]}_sugar`).innerText;
    var sugar_3 = document.getElementById(`${fruit[2]}_sugar`).innerText;
    carb_total.innerText = `Total Carbohydrates: ${carb_1 * 1 + carb_2 * 1 + carb_3 * 1}`;
    protein_total.innerText = `Total Protein: ${protein_1 * 1 + protein_2 * 1 + protein_3 * 1}`;
    fat_total.innerText = `Total Fat: ${fat_1 * 1 + fat_2 * 1 + fat_3 * 1}`;
    cal_total.innerText = `Total Calories: ${cal_1 * 1 + cal_2 * 1 + cal_3 * 1}`;
    sugar_total.innerText = `Total Sugar: ${sugar_1 * 1 + sugar_2 * 1 + sugar_3 * 1}`;
  }

  let summary = document.getElementById("your_summary");
  summary.appendChild(carb_total);
  summary.appendChild(protein_total);
  summary.appendChild(fat_total);
  summary.appendChild(cal_total);
  summary.appendChild(sugar_total);


}

function clickButton() {

  let j = 0;

  for (let i = 1; i < 40; i++) {
    var checkBox = document.getElementById(`checkbox_${i}`);
    if (checkBox.checked == true) {
      j += 1
    } 
  }

  if (j == 0) {
    alert("Please select at least 1 fruit.")
    return;
  }
  
  let order = document.getElementById("order");
  let message = document.createElement("h2");
  let title = document.createElement("h3");
  let sub = document.createElement("div")
  let ul = document.createElement("ul")
  ul.setAttribute("id", "your_fruit");
  let sub_2 = document.createElement("div")
  let ul_2 = document.createElement("ul")
  ul_2.setAttribute("id", "your_summary");
  let order_date = document.createElement("div")
  order_date.innerText = `Order Date: ${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()}`;

  let name = document.createElement("div");
  let email = document.createElement("div");
  let phone = document.createElement("div");
  let special = document.createElement("div");


  message.textContent = "Your order has been submitted!";
  title.textContent = "Order Information";
  sub.textContent = "Your Fruit Juice Mix Ingredients:"
  sub_2.textContent = "Nutrition Facts of Your Mix:"

  name.innerHTML = `Name: ${document.getElementsByName("form_name")[0].value}`;
  email.innerHTML = `Email: ${document.getElementsByName("form_email")[0].value}`;
  phone.innerHTML = `Phone: ${document.getElementsByName("form_phone")[0].valu}`;
  special.innerHTML = `Special Instruction: ${document.getElementsByName("form_message")[0].value}`;


  document.getElementById("order").removeAttribute("class");
  document.querySelector(".fresh_main").setAttribute("class", "hidden");

  order.appendChild(message);
  order.appendChild(title);

  order.appendChild(order_date);

  order.appendChild(name);
  order.appendChild(email);
  order.appendChild(phone);

  order.appendChild(sub);
  sub.appendChild(ul);
  order.appendChild(sub_2);
  sub_2.appendChild(ul_2);

  getFruit();

  if (special != null) {
    order.appendChild(special);
  }

  let yourOrder = localStorage.getItem("fruitJuiceOrder");
  localStorage.setItem("fruitJuiceOrder", yourOrder * 1 + 1);

}



function checkBoxLimit() {
	var checkBoxGroup = document.querySelectorAll(".checkbox");		
	var limit = 3;
  var j = 1;
	for (var i = 0; i < checkBoxGroup.length; i++) {
		checkBoxGroup[i].onclick = function() {
			var checkedcount = 0;
			for (var i = 0; i < checkBoxGroup.length; i++) {
				checkedcount += (checkBoxGroup[i].checked) ? 1 : 0;
			}
			if (checkedcount == limit) {
      } else if (checkedcount > limit) {
				alert("You can choose maximum of " + limit + " kinds of fruit.");						
				this.checked = false;
			}
		}
	}
}