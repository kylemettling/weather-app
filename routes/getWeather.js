const express = require("express");
const router = express.Router();
const WeatherController = require("../controllers/getWeather");

router.get("/getWeather/:city/:state", WeatherController.getWeather);

module.exports = router;
