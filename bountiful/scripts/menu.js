function toggleMenu() {
  document.getElementById("menu").classList.toggle("open");
  document.getElementById("menuBtn").classList.toggle("open");
}

const x = document.getElementById("menuBtn");
x.onclick = toggleMenu;