let submit = document
  .querySelector(".submit")
  .addEventListener("click", onSubmit);
let getCity = document.querySelector(".cityRequest");
let getState = document.querySelector(".stateRequest");
let resultDisplay = document.querySelector(".output");
let weatherIcon = document.querySelector(".weather-icon");
let outputGroup = document.querySelector(".outputGroup");
let cityOutput = document.querySelector(".cityOutput");
let outputInfo = document.querySelector(".outputInfo");
let outputCats = document.querySelector(".outputCats");
let tempCurrent = document.querySelector(".tempCurrent");
let weatherConditions = document.querySelector(".weatherType");
let tempMax = document.querySelector(".tempMax");
let tempMin = document.querySelector(".tempMin");
let windSpeed = document.querySelector(".windSpeed");
let windDeg = document.querySelector(".windDir");
let response;
let temp, icon, weatherType, city, max, min;
let tempChoice = "f";

// async function showIt() {
//   console.log(await result);
// }
// showIt();

function onSubmit() {
  getCity.value === ""
    ? alert("Please enter a valid city name")
    : (city = getCity.value),
    (state = getState.value),
    (city = toTitleCase(city)),
    getWeather(),
    (getCity.value = "");
}
async function getWeather() {
  console.log(city, state);
  response = await fetch(`/${city}/${state}`).then((res) => {
    const result = document.querySelector(".result").innerHTML;
    console.log(result);
  });
  //   response = await fetch(
  //     `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},USA&units=imperial&appid=${API_KEY}`
  //   ).then((res) => res.json());
  //   response["cod"] != 200
  //     ? alert("Invalid city name, please try again.")
  //     : setWeather(),
  //     weatherTextColor();
  //   console.log(response);
}

let toTitleCase = (text) =>
  text
    .toLowerCase()
    .split(" ")
    .map((text) => text.replace(text[0], text[0].toUpperCase()))
    .join(" ");

function weatherTextColor() {
  tempCurrent.style.color = "rgb(140, 140, 153)";
  tempMin.style.color = "rgb(140, 140, 153)";
  tempMax.style.color = "rgb(140, 140, 153)";
  windSpeed.style.color = "rgb(140, 140, 153)";
  windDeg.style.color = "rgb(140, 140, 153)";

  if (temp < 60) {
    tempCurrent.style.color = "lightblue";
  } else if (temp > 75) {
    tempCurrent.style.color = "rgb(204, 61, 61)";
  }
  if (min < 60) {
    tempMin.style.color = "lightblue";
  } else if (min > 75) {
    tempMin.style.color = "rgb(204, 61, 61)";
  }
  if (max < 60) {
    tempMax.style.color = "lightblue";
  } else if (max > 75) {
    tempMax.style.color = "rgb(204, 61, 61)";
  }
  if (wind > 10 && wind < 20) {
    windSpeed.style.color = "rgb(242, 245, 88)";
    windDeg.style.color = "rgb(242, 245, 88)";
  } else if (wind > 20) {
    windSpeed.style.color = "rgb(204, 61, 61)";
    windDeg.style.color = "rgb(204, 61, 61)";
  }
}

// function setWeather() {
//   cityOutput.innerHTML = `${city}, ${state}`;
//   temp = Math.round(response["main"]["temp"]);
//   weatherType = toTitleCase(response["weather"][0]["description"]);
//   min = Math.round(response["main"]["temp_min"]);
//   max = Math.round(response["main"]["temp_max"]);
//   wind = Math.round(response["wind"]["speed"]);
//   windDir = response["wind"]["deg"];
//   getIcon();
//   displayResult();
// }

function tempSwitch() {}

// function getIcon() {
//   icon = response["weather"]["0"]["icon"];
//   console.log(icon);
// }

// async function displayResult() {
//   tempCurrent.innerHTML = ` ${temp}&#176; ${tempChoice}`;
//   weatherIcon.setAttribute("alt", weatherType);
//   await weatherIcon.setAttribute(
//     "src",
//     `http://openweathermap.org/img/wn/${icon}.png`
//   );
//   weatherConditions.innerHTML = ` ${weatherType}`;
//   tempMax.innerHTML = `${max}&#176; ${tempChoice}`;
//   tempMin.innerHTML = `${min}&#176; ${tempChoice}`;
//   windSpeed.innerHTML = `${wind} mph`;
//   windDeg.style.transform = `rotate(${windDir}deg)`;
//   outputGroup.classList.remove("hidden");
// }
