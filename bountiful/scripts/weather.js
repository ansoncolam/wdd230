
const currentTemp = document.querySelector("#temperature");
const weatherIcon = document.querySelector("#weather_img");
const captionDesc = document.querySelector("#weather_des");
const currentHumidity = document.querySelector("#humidity");

const url = "https://api.openweathermap.org/data/2.5/weather?q=carlsbad&appid=e70cd282d65cb1937045ccbb806d100e&units=metric";

const url_forcast = "https://api.openweathermap.org/data/2.5/forecast?q=carlsbad&appid=e70cd282d65cb1937045ccbb806d100e&units=metric";

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayResults(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

apiFetch();


function displayResults(weatherData) {
  currentTemp.innerHTML = `${weatherData.main.temp.toFixed(1)}`;

  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;

  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", desc);
  captionDesc.textContent = desc;
  currentHumidity.innerHTML = `${weatherData.main.humidity.toFixed(0)}`;

}


async function apiFetch_forcast() {
  try {
    let response = await fetch(url_forcast);
    if (response.ok) {
      let data = await response.json();
      console.log(data);
      // displayResults(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

apiFetch_forcast();
