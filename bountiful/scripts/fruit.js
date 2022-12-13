const requestURL = "https://brotherblazzard.github.io/canvas-content/fruit.json";
const flist = document.querySelector(".flist");

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    // console.table(jsonObject)
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

  f_protein.textContent = `${fruits.nutritions.protein}`;
  f_protein.setAttribute("class", "f_info");

  f_fat.textContent = `${fruits.nutritions.fat}`;
  f_fat.setAttribute("class", "f_info");

  f_cal.textContent = `${fruits.nutritions.calories}`;
  f_cal.setAttribute("class", "f_info");

  f_sugar.textContent = `${fruits.nutritions.sugar}`;
  f_sugar.setAttribute("class", "f_info");

  flist.appendChild(f_check);
  flist.appendChild(f_name);
  flist.appendChild(f_carb);
  flist.appendChild(f_protein);
  flist.appendChild(f_fat);
  flist.appendChild(f_cal);
  flist.appendChild(f_sugar);

  i += 1;
}

let j = 1;

function getFruit() {
  for (let i = 1; i < 40; i++) {
    var checkBox = document.getElementById(`checkbox_${i}`);
    if (checkBox.checked == true) {
        j += 1
    } 
  }
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



function clickButton() {
  let order = document.getElementById("order");
  let message = document.createElement("h2");
  let message2 = document.createElement("h2");
  let title = document.createElement("h3");


  message.textContent = "Your order has been submitted!";
  message2.textContent = "We will contract you shortly.";
  title.textContent = "Order Information";



  getFruit();
  document.getElementById("order").removeAttribute("class");
  document.querySelector(".fresh_main").setAttribute("class", "hidden");


  order.appendChild(message);
  order.appendChild(message2);
  order.appendChild(title);

  let yourOrder = localStorage.getItem("fruitJuiceOrder");
  localStorage.setItem("fruitJuiceOrder", yourOrder * 1 + 1);

}