import axios from "axios";

export default {
  getCurrentWeather: function (query) {
    return axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${process.env.REACT_APP_API_KEY}`
    );
  },
  getFiveDayForecast: function () {
    return axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=seattle&appid=${process.env.REACT_APP_API_KEY}`
    );
  },
  getUV: function () {
    return axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=seattle&appid=${process.env.REACT_APP_API_KEY}`
      )
      .then(function (res) {
        const lat = res.data.coord.lat;
        const lon = res.data.coord.lon;
        return axios.get(
          `http://api.openweathermap.org/data/2.5/uvi/forecast?appid=${process.env.REACT_APP_API_KEY}&lat=${lat}&lon=${lon}`
        );
      });
  },
};
