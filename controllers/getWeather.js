const fetch = require("node-fetch");
const Weather = require("../services/weatherOutput");
require("dotenv").config({ path: `./config/process.env` });
const API_KEY = process.env.API_KEY;
module.exports = {
  getWeather: (req, res) => {
    const { city, state } = req.params;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},USA&units=imperial&appid=${API_KEY}`
    )
      .then((result) => result.json())
      .then((data) => {
        const {
          main: { temp },
        } = data;
        console.log(!temp ? "" : temp);
        res.render("weather.ejs", { temp });
      });
  },
  // resWeather: (req, res) => {
  //   res.render("weather.ejs", { weather });
  // },
};
