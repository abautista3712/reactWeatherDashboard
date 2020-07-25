import axios from "axios";

export default {
  getWeather: function (query) {
    return axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=${process.env.REACT_APP_API_KEY}`
      )
      .then(function (res) {
        const lat = res.data.city.coord.lat;
        const lon = res.data.city.coord.lon;
        return axios.get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=${process.env.REACT_APP_API_KEY}`
        );
      });
  },
};
