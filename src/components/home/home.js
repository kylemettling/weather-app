import React, { useState, useEffect } from "react";
import "./style.css";
import axios from "axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fab, fas);

export default function Home() {
  const [cityName, setCityName] = useState("Enter a city name");
  const [stateName, setStateName] = useState("AL");
  const [mainTemp, setMainTemp] = useState("Weather Main");
  const [maxTemp, setMaxTemp] = useState("");
  const [minTemp, setMinTemp] = useState("");
  const [humidity, setHumidity] = useState("");
  const [windSpeed, setWindSpeed] = useState("");
  const [windDeg, setWindDeg] = useState("");
  // const [icon, setIcon] = useState("");
  const [weatherResults, setWeatherResults] = useState(false);
  const [weatherDescription, setDescription] = useState("Weather Description");
  const { REACT_APP_API_KEY } = process.env;

  function handleClick(e) {
    e.target.value = "";
  }

  async function getWeather(e) {
    setWeatherResults(false);
    e.preventDefault();
    const {
      data: {
        main: { temp, temp_min, temp_max, humidity },
        weather,
        wind: { speed, deg },
      },
    } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName.replace(
        " ",
        "&nbsp;"
      )},${stateName},USA&units=imperial&appid=${REACT_APP_API_KEY}`
    );
    const { icon, description } = weather[0];
    setMainTemp(temp);
    setMaxTemp(temp_max);
    setMinTemp(temp_min);
    setHumidity(`${humidity}%`);
    setWindSpeed(`${Math.round(speed)}mph`);
    setWindDeg(deg);
    // setIcon(icon);
    setDescription(processDescription(icon, description));
    setWeatherResults(true);
  }

  function processDescription(icon, description) {
    description = description
      .split(" ")
      .map((word) => {
        return word.replace(word[0], word[0].toUpperCase());
      })
      .join(" ");
    return (
      <div className="condition-con">
        <img
          alt="weather-icon"
          className="weather-icon"
          src={`http://openweathermap.org/img/wn/${icon}.png`}
        ></img>
        <span>{description}</span>
      </div>
    );
  }

  function processWind(windDeg) {
    return (
      <FontAwesomeIcon
        className="windDir"
        style={{ transform: `rotate(${windDeg}deg)` }}
        icon={["fa", "long-arrow-alt-up"]}
      ></FontAwesomeIcon>
    );
  }
  useEffect(() => {});
  const weatherItems = [
    { text: "Conditions:", value: weatherDescription },
    { text: "Current:", value: mainTemp },
    { text: "Max", value: maxTemp },
    { text: "Min", value: minTemp },
    { text: "Humidity", value: humidity },
    {
      text: "Wind",
      value: [windSpeed, processWind(windDeg)],
    },
  ];

  return (
    <div>
      <div className="main-con">
        <h1 className="chooseCity">
          Enter a U.S. city and state to retrieve the weather
        </h1>
        <div className="inputGroup">
          <input
            name="city"
            type="text"
            className="cityRequest"
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
            onClick={handleClick}
          />
          <select
            name="state"
            type="text"
            className="stateRequest"
            value={stateName}
            onChange={(e) => setStateName(e.target.value)}
          >
            <option value="AL">AL</option>
            <option value="AK">AK</option>
            <option value="AR">AR</option>
            <option value="AZ">AZ</option>
            <option value="CA">CA</option>
            <option value="CO">CO</option>
            <option value="CT">CT</option>
            <option value="DC">DC</option>
            <option value="DE">DE</option>
            <option value="FL">FL</option>
            <option value="GA">GA</option>
            <option value="HI">HI</option>
            <option value="IA">IA</option>
            <option value="ID">ID</option>
            <option value="IL">IL</option>
            <option value="IN">IN</option>
            <option value="KS">KS</option>
            <option value="KY">KY</option>
            <option value="LA">LA</option>
            <option value="MA">MA</option>
            <option value="MD">MD</option>
            <option value="ME">ME</option>
            <option value="MI">MI</option>
            <option value="MN">MN</option>
            <option value="MO">MO</option>
            <option value="MS">MS</option>
            <option value="MT">MT</option>
            <option value="NC">NC</option>
            <option value="NE">NE</option>
            <option value="NH">NH</option>
            <option value="NJ">NJ</option>
            <option value="NM">NM</option>
            <option value="NV">NV</option>
            <option value="NY">NY</option>
            <option value="ND">ND</option>
            <option value="OH">OH</option>
            <option value="OK">OK</option>
            <option value="OR">OR</option>
            <option value="PA">PA</option>
            <option value="RI">RI</option>
            <option value="SC">SC</option>
            <option value="SD">SD</option>
            <option value="TN">TN</option>
            <option value="TX">TX</option>
            <option value="UT">UT</option>
            <option value="VT">VT</option>
            <option value="VA">VA</option>
            <option value="WA">WA</option>
            <option value="WI">WI</option>
            <option value="WV">WV</option>
            <option value="WY">WY</option>
          </select>
          <button className="submit" onClick={(e) => getWeather(e)}>
            Get Weather
          </button>
        </div>
        {weatherResults && (
          <div className="outputGroup">
            <ul className="outputCats">
              {weatherItems.map((item, index) => {
                return <li key={index}>{item.text}</li>;
              })}
            </ul>
            <ul className="weatherOutput">
              {weatherItems.map((item, index) => {
                return <li key={index}>{item.value}</li>;
              })}
            </ul>
          </div>
        )}
        <div className="openWeather">
          <span>
            Data powered by{" "}
            <a href="https://openweathermap.org/">openweathermap.org</a> API
          </span>
        </div>
      </div>
    </div>
  );
}
