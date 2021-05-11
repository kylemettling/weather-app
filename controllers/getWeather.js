const fetch = require("node-fetch");
const Weather = require("../services/weatherOutput");
require("dotenv").config({ path: `./config/process.env` });
const API_KEY = process.env.API_KEY;
module.exports = {
  getWeather: (req, res) => {
    console.log(req.body);
    const { city, state } = req.params;
    console.log(city, state);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},USA&units=imperial&appid=${API_KEY}`
    )
      .then((result) => result.json())
      .then((data) => {
        // console.log(data);
        const weather = new Weather(data);
        console.log(weather);
        res.render("weather.ejs", { weather });
      });
  },
  resWeather: (req, res) => {
    res.render("weather.ejs", { weather });
  },
};
