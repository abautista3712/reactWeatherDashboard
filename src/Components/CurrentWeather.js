import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import API from "../utils/API";

function CurrentWeather() {
  const [city, setCity] = useState();
  const [temperature, setTemperature] = useState();
  const [weather, setWeather] = useState();
  const [weatherIcon, setWeatherIcon] = useState();
  const [humidity, setHumidity] = useState();
  const [wind, setWind] = useState();
  const [UV, setUV] = useState();

  useEffect(() => {
    API.getWeather().then((res) => {
      setCity(res.data.name);
      setTemperature(((res.data.main.temp - 273.15) * (9 / 5) + 32).toFixed(1));
      setWeather(res.data.weather[0].main);
      setWeatherIcon(res.data.weather[0].icon);
      setHumidity(res.data.main.humidity);
      setWind(res.data.wind.speed);
      setUV();
    });
  });
  return (
    <div>
      <Row>
        <Col>{city}</Col>
      </Row>
      <Row>
        <Col>{temperature}</Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col xs sm md lg xl="2">
          {weather}
        </Col>
        <Col>{weatherIcon}</Col>
      </Row>
      <Row>
        <Col>Humidity</Col>
        <Col>{humidity}</Col>
        <Col>Wind</Col>
        <Col>{wind}</Col>
        <Col>UV</Col>
        <Col>{UV}</Col>
      </Row>
    </div>
  );
}

export default CurrentWeather;
