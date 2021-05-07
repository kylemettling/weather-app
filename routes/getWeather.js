const express = require("express");
const router = express.Router();
const WeatherController = require("../controllers/getWeather");

router.get("/getWeather/:city/:state", WeatherController.getWeather);
router.get("/weather", WeatherController.resWeather);
module.exports = router;
