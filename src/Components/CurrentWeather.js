import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import API from "../utils/API";

function CurrentWeather() {
  const [city, setCity] = useState();
  const [temperature, setTemperature] = useState();
  const [weather, setWeather] = useState();
  const [weatherIcon, setWeatherIcon] = useState();
  const [windSpeed, setWindSpeed] = useState();
  const [windDirection, setWindDirection] = useState();
  const [humidity, setHumidity] = useState();
  const [pressure, setPressure] = useState();
  const [UV, setUV] = useState();

  useEffect(() => {
    API.getWeather().then((res) => {
      setCity(res.data.name);
      setTemperature(((res.data.main.temp - 273.15) * (9 / 5) + 32).toFixed(1));
      setWeather(res.data.weather[0].main);
      setWeatherIcon(res.data.weather[0].icon);
      setWindSpeed(res.data.wind.speed);
      setWindDirection(res.data.wind.deg);
      setHumidity(res.data.main.humidity);
      setPressure(res.data.main.pressure);
      setUV();
    });
  });
  return (
    <div>
      <Row>
        <Col>{city}</Col>
      </Row>
      <Row>
        <Col>{temperature}°</Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col xs sm md lg xl="2">
          {weather}
        </Col>
        <Col>{weatherIcon}</Col>
      </Row>
      <Row>
        <Col>Wind</Col>
        <Col>
          {windSpeed} m/s {windDirection}
        </Col>
        <Col>Humidity</Col>
        <Col>{humidity} %</Col>
        <Col>Pressure</Col>
        <Col>{pressure} hPa</Col>
        <Col>UV</Col>
        <Col>{UV}</Col>
      </Row>
    </div>
  );
}

export default CurrentWeather;
