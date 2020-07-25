import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import API from "../utils/API";
import SearchCity from "./SearchCity";
import CurrentDate from "./CurrentDate";
import "./CurrentWeather.css";

function CurrentWeather() {
  const [city, setCity] = useState();
  const [temperature, setTemperature] = useState();
  const [condition, setCondition] = useState();
  const [weatherIcon, setWeatherIcon] = useState();
  const [windSpeed, setWindSpeed] = useState();
  const [windDirection, setWindDirection] = useState();
  const [humidity, setHumidity] = useState();
  const [pressure, setPressure] = useState();
  const [UV, setUV] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const fetchCity = await API.getCity("Los Angeles");
        const responseCity = await fetchCity.data.city.name;
        setCity(responseCity);
        const fetchWeather = await API.getWeather("Los Angeles");
        const responseWeather = await fetchWeather.data.current;
        setTemperature(responseWeather.temp.toFixed(1));
        setCondition(responseWeather.weather[0].main);
        setWeatherIcon(responseWeather.weather[0].icon);
        setWindSpeed(responseWeather.wind_speed);
        setWindDirection(responseWeather.wind_deg);
        setHumidity(responseWeather.humidity);
        setPressure(responseWeather.pressure);
        setUV(responseWeather.uvi);
      } catch (err) {
        console.log("CurrentWeather.js API Error");
      } finally {
        console.log("CurrentWeather loaded!");
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  function getDirection(angle) {
    const directions = ["N", "NW", "W", "SW", "S", "SE", "E", "NE"];
    return directions[
      Math.round(((angle %= 360) < 0 ? angle + 360 : angle) / 45) % 8
    ];
  }

  return (
    <div className="fontStyle">
      {isLoading ? (
        console.log("CurrentWeather Loading...")
      ) : (
        <div>
          <SearchCity />
          <Row className="mt-1">
            <Col style={{ fontSize: 30, fontWeight: "bold" }}>{city}</Col>
          </Row>
          <Row>
            <CurrentDate />
          </Row>
          <Row className="mt-1 mb-0">
            <Col style={{ lineHeight: "100%", fontSize: "90px" }}>
              {temperature}°
            </Col>
          </Row>
          <Row className="mt-0 mb-1">
            <Col style={{ fontSize: 24 }}>
              {condition}{" "}
              <img
                src={`http://openweathermap.org/img/w/${weatherIcon}.png`}
                alt="Weather Icon"
              />
            </Col>
          </Row>
          <Row className="mb-4">
            <Col md={{ span: 2, offset: 3 }}>
              <Col className="font-weight-bold">Wind</Col>
              <Col>
                {windSpeed} mph {getDirection(windDirection)}
              </Col>
            </Col>
            <Col md={{ span: 2 }}>
              <Col className="font-weight-bold">Humidity</Col>
              <Col>{humidity} %</Col>
            </Col>
            <Col md={{ span: 2 }}>
              <Col className="font-weight-bold">Pressure</Col>
              <Col>{pressure} hPa</Col>
            </Col>
            <Col md={{ span: 2 }}>
              <Col className="font-weight-bold">UV Index</Col>
              <Col>{UV}</Col>
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
}

export default CurrentWeather;
