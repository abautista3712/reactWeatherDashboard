import axios from "axios";

export default {
  getWeather: function () {
    return axios.get(
      "https://api.openweathermap.org/data/2.5/weather?q=seattle&appid=2d2e3d50a761f51d222ae328e374ca3b"
    );
  },
};
