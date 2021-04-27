const express = require("express");
const app = express();
const fetch = require("node-fetch");
const homeRoutes = require("./routes/home");
const weatherRoutes = require("./routes/getWeather");
require("dotenv").config({ path: `${__dirname}/config/process.env` });
const API_KEY = process.env.API_KEY;
const PORT = process.env.PORT || 5500;

app.set("view-engine", "ejs");
// app.set("views", path.join(__dirname, "vews"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", homeRoutes);
app.get("/getWeather/:city/:state", weatherRoutes);
app.get("/weather", weatherRoutes);

app.listen(PORT, console.log(`Server running on port: ${PORT}`));
