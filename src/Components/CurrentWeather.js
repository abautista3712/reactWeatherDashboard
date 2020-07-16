import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import API from "../utils/API";
import moment from "moment";
import "./CurrentWeather.css";

function CurrentWeather() {
  const [date] = useState(moment().format("LLL"));
  const [city, setCity] = useState();
  const [temperature, setTemperature] = useState();
  const [weather, setWeather] = useState();
  const [weatherIcon, setWeatherIcon] = useState();
  const [windSpeed, setWindSpeed] = useState();
  const [windDirection, setWindDirection] = useState();
  const [humidity, setHumidity] = useState();
  const [pressure, setPressure] = useState();
  // const [UV, setUV] = useState();

  useEffect(() => {
    API.getUV().then((res) => {
      // console.log(res);
    });
    API.getCurrentWeather().then((res) => {
      // console.log(res);
      setCity(res.data.name);
      setTemperature(((res.data.main.temp - 273.15) * (9 / 5) + 32).toFixed(1));
      setWeather(res.data.weather[0].main);
      setWeatherIcon(res.data.weather[0].icon);
      setWindSpeed(res.data.wind.speed);
      setWindDirection(res.data.wind.deg);
      setHumidity(res.data.main.humidity);
      setPressure(res.data.main.pressure);
    });
  }, []);
  return (
    <div className="fontStyle">
      <Row>
        <Col>{city}</Col>
      </Row>
      <Row>
        <Col>{temperature}°</Col>
      </Row>
      <Row>
        <Col>{date}</Col>
      </Row>
      <Row className="">
        <Col className="">{weather}</Col>
        <Col>
          <img
            src={`http://openweathermap.org/img/w/${weatherIcon}.png`}
            alt="Weather Icon"
          />
        </Col>
      </Row>
      <Row>
        <Col></Col>
        <Col>
          <Col className="font-weight-bold text-right">Wind</Col>
          <Col className="text-left">
            {windSpeed} m/s {windDirection}
          </Col>
          <Col className="font-weight-bold text-right">Humidity</Col>
          <Col className="text-left">{humidity} %</Col>
          <Col className="font-weight-bold text-right">Pressure</Col>
          <Col className="text-left">{pressure} hPa</Col>
          {/* <Col>UV</Col> */}
          {/* <Col>{UV}</Col> */}
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
}

export default CurrentWeather;
