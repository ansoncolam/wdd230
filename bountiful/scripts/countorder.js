if (localStorage.getItem("fruitJuiceOrder") === null) {
    localStorage.setItem("fruitJuiceOrder", 0);
}
  
let yourOrder = localStorage.getItem("fruitJuiceOrder");
let summary = document.getElementById("order_comment");
let totalOrder = document.getElementById("order_submit");

  
if (yourOrder == 0) {
    summary.innerHTML = "Feel free to visit our FRESH page and order specialized fruit jucie mix with your favourite flavors!";
} else if (yourOrder >= 1) {
    summary.innerHTML = "The fruit juice mix order(s) you have submitted through Bountiful Foods:";
    totalOrder.textContent = `${yourOrder}`;
}