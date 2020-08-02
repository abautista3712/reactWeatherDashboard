import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import API from "../utils/API";
import SearchCity from "./SearchCity";
import CurrentDate from "./CurrentDate";
import "./CurrentWeather.css";

function CurrentWeather(props) {
  const [city, setCity] = useState();
  const [temperature, setTemperature] = useState();
  const [minTemp, setMinTemp] = useState();
  const [maxTemp, setMaxTemp] = useState();
  const [condition, setCondition] = useState();
  const [weatherIcon, setWeatherIcon] = useState();
  const [windSpeed, setWindSpeed] = useState();
  const [windDirection, setWindDirection] = useState();
  const [humidity, setHumidity] = useState();
  const [pressure, setPressure] = useState();
  const [UV, setUV] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const [query, setQuery] = useState("Los Angeles");

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const fetchCity = await API.getCity(`${query}`);
        const responseCity = await fetchCity.data.city.name;
        setCity(responseCity);
        const fetchWeather = await API.getWeather(`${query}`);
        const responseWeather = await fetchWeather.data.current;
        setTemperature(responseWeather.temp.toFixed(1));
        setCondition(responseWeather.weather[0].main);
        setWeatherIcon(responseWeather.weather[0].icon);
        setWindSpeed(responseWeather.wind_speed);
        setWindDirection(responseWeather.wind_deg);
        setHumidity(responseWeather.humidity);
        setPressure(responseWeather.pressure);
        setUV(responseWeather.uvi);
        const responseTempMinMax = await fetchWeather.data.daily[0].temp;
        // console.log(responseTempMinMax);
        setMinTemp(responseTempMinMax.min.toFixed(1));
        setMaxTemp(responseTempMinMax.max.toFixed(1));
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
          {/* Search Bar */}
          <SearchCity test="from CurrentWeather" />
          {/* City */}
          <Row className="mt-1">
            <Col style={{ fontSize: 30, fontWeight: "bold" }}>{city}</Col>
          </Row>
          {/* Date */}
          <Row>
            <CurrentDate />
          </Row>
          {/* Temperature */}
          <Row className="mt-1 mb-0">
            <Col
              md={{ span: 3, offset: 4 }}
              style={{ lineHeight: "100%", fontSize: "90px" }}
            >
              {temperature}°
            </Col>
            <Row style={{ textAlign: "left" }}>
              <Col md={12} className="my-auto px-0">
                Low: {minTemp}°
              </Col>
              <Col md={12} className="my-auto px-0">
                High: {maxTemp}°
              </Col>
            </Row>
          </Row>
          {/* Weather Condition */}
          <Row className="mt-0 mb-1">
            <Col style={{ fontSize: 24 }}>
              {condition}{" "}
              <img
                src={`http://openweathermap.org/img/w/${weatherIcon}.png`}
                alt="Weather Icon"
              />
            </Col>
          </Row>

          {/* Wind Speed and Direction */}
          <Row className="mb-4">
            <Col md={{ span: 2, offset: 2 }}>
              <Col className="font-weight-bold">Wind</Col>
              <Col>
                {windSpeed} mph {getDirection(windDirection)}
              </Col>
            </Col>
            {/* Humidity */}
            <Col md={{ span: 2 }}>
              <Col className="font-weight-bold">Humidity</Col>
              <Col>{humidity} %</Col>
            </Col>
            {/* Pressure */}
            <Col md={{ span: 2 }}>
              <Col className="font-weight-bold">Pressure</Col>
              <Col>{pressure} hPa</Col>
            </Col>
            {/* UV Index */}
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
