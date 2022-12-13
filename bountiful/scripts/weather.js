
const currentTemp = document.querySelector("#temperature");
const weatherIcon = document.querySelector("#weather_img");
const captionDesc = document.querySelector("#weather_des");
const currentHumidity = document.querySelector("#humidity");

const url = "https://api.openweathermap.org/data/2.5/weather?q=carlsbad&appid=e70cd282d65cb1937045ccbb806d100e&units=metric";

const url_forecast = "https://api.openweathermap.org/data/2.5/forecast?q=carlsbad&appid=e70cd282d65cb1937045ccbb806d100e&units=metric";

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
  currentTemp.innerHTML = `${weatherData.main.temp.toFixed(0)}&#8451`;

  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;

  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", desc);
  captionDesc.textContent = desc;
  currentHumidity.innerHTML = `Humidity: ${weatherData.main.humidity.toFixed(0)}%`;

}



// ---------- Forecast ----------

const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun", "Mon", "Tue"];

function displayforecast(weatherData) {
  const forecast = document.querySelector("#forecast");
  const forecastTemp1 = document.createElement("div");
  const forecastTemp2 = document.createElement("div");
  const forecastTemp3 = document.createElement("div");
  const forecastTitle = document.createElement("h3");
  const t1 = document.createElement("div");
  const t2 = document.createElement("div");
  const t3 = document.createElement("div");
  t1.innerHTML = `${now.getMonth() + 1}/${now.getDate() + 1} (${days[now.getDay() + 1]})`;
  t2.innerHTML = `${now.getMonth() + 1}/${now.getDate() + 2} (${days[now.getDay() + 2]})`;
  t3.innerHTML = `${now.getMonth() + 1}/${now.getDate() + 3} (${days[now.getDay() + 3]})`;

  forecastTitle.innerHTML = "Temperature Forecast";
  forecastTemp1.innerHTML = `${weatherData.list[(10)].main.temp_max.toFixed(1)}&#8451`;
  forecastTemp2.innerHTML = `${weatherData.list[(18)].main.temp_max.toFixed(1)}&#8451`;
  forecastTemp3.innerHTML = `${weatherData.list[(26)].main.temp_max.toFixed(1)}&#8451`;

  forecast.appendChild(forecastTitle);
  forecast.appendChild(t1);
  forecast.appendChild(forecastTemp1);
  forecast.appendChild(t2);
  forecast.appendChild(forecastTemp2);
  forecast.appendChild(t3);
  forecast.appendChild(forecastTemp3);


  // const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  // const desc = weatherData.weather[0].description;

  // weatherIcon.setAttribute("src", iconsrc);
  // weatherIcon.setAttribute("alt", desc);
  // captionDesc.textContent = desc;

}





async function apiFetch_forecast() {
  try {
    let response = await fetch(url_forecast);
    if (response.ok) {
      let data = await response.json();
      console.log(data);
      displayforecast(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

apiFetch_forecast();
