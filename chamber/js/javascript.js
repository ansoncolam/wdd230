let text = document.lastModified;
document.getElementById("lastmodified").innerHTML = "Last Modification: " + text;

const datefield = document.getElementById("header_date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full"}).format(now);
datefield.innerHTML = `<em>${fulldate}</em>`;

let curryear = now.getFullYear();
document.getElementById("curryear").innerHTML =`@${curryear} Tolo Chamber`;
document.getElementById("curryear2").innerHTML =`@${curryear} Tolo Chamber | Anson Lam | WDD 230 Project |`;

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;
