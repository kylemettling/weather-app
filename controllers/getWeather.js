const fetch = require("node-fetch");
require("dotenv").config({ path: `./config/process.env` });
const API_KEY = process.env.API_KEY;
module.exports = {
  getWeather: (req, res) => {
    const { city, state } = req.params;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},USA&units=imperial&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
    res.redirect("/");
  },
};
