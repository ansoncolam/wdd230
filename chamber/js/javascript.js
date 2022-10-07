let text = document.lastModified;
document.getElementById("lastmodified").innerHTML = "Last Modification: " + text;

const datefield = document.getElementById("header_date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full"}).format(now);
datefield.innerHTML = `<em>${fulldate}</em>`;

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;
