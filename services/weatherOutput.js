class WeatherOutput {
  constructor(data) {
    this.data = data;
    this.temp = data.main.temp;
  }
}

module.exports = WeatherOutput;
