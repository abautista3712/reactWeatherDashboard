import axios from "axios";

export default {
  getWeather: function () {
    return axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=seattle&appid=${process.env.REACT_APP_API_KEY}`
    );
  },
};
