// get today
let today = new Date();
let tday = today.getDate();
let tmonth = (today.getMonth() + 1);
let tyear = today.getFullYear();

// check if visitcount existed
if (localStorage.lvday) {
    let lvday = localStorage.getItem("lvday") * 1;
    let lvmonth = localStorage.getItem("lvmonth") * 1;
    let lvyear = localStorage.getItem("lvyear") * 1;
    // check if today match last visit day
    if (lvday === tday && lvmonth === tmonth && lvyear === tyear) {
        alert("Welcome back, you have been here today.");
    } else {
        date2 = new Date(tyear,tmonth - 1,tday);
        date1 = new Date(lvyear,lvmonth - 1,lvday);
        let days = finddays(date1, date2);
        alert("Welcome back, you have been here " + days + " day(s) before.");
        updatevisit();
    }
} else {
    updatevisit();
    alert("Welcome, today is your first day being in here.");
}

// update last visit function
function updatevisit() {
    localStorage.setItem("lvday", new Date().getDate());
    localStorage.setItem("lvmonth", new Date().getMonth() + 1);
    localStorage.setItem("lvyear", new Date().getFullYear());
}

// days between two dates function
function finddays(date1, date2) {
    let diff = date2.getTime() - date1.getTime();
    let total = Math.ceil(diff / (1000 * 3600 * 24));
    return total;
}