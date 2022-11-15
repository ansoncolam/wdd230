
let temp_c = document.getElementById("current-temp").innerHTML;
let temp_f = (temp_c * 9 / 5) + 32;

let speed_kmh = document.getElementById("windspeed").innerHTML;
let speed_mph = speed_kmh / 1.609344;

if (temp_f <= 50 && speed_mph > 3) {
    document.getElementById("windchill").innerHTML = windchill(temp_f, speed_mph);
} else {
    document.getElementById("windchill").innerHTML = "N/A";
}

function windchill(temperature, windspeed) {
    let chill_f = 35.74 + (0.6215 * temperature) - (35.75 * (windspeed ** 0.16)) + (0.4275 * temperature * (windspeed ** 0.16));
    console.log((0.6215 * temperature));
    console.log((35.75 * (windspeed ** 0.16)));
    console.log((0.4275 * temperature * (windspeed ** 0.16)));
    return Math.round(chill_f);
}