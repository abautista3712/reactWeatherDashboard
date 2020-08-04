import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import API from "../utils/API";
import Convert from "../utils/Convert";
import CurrentDate from "./CurrentDate";
import "./CurrentWeather.css";

const CurrentWeather = (props) => {
  const [city, setCity] = useState("Los Angeles");
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

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const fetchWeather = await API.getWeather(city);
        const responseWeather = await fetchWeather.data;
        const { current } = responseWeather;
        setTemperature(current.temp.toFixed(1));
        const { weather } = current;
        setCondition(weather[0].main);
        setWeatherIcon(weather[0].icon);
        setWindSpeed(current.wind_speed);
        setWindDirection(current.wind_deg);
        setHumidity(current.humidity);
        setPressure(current.pressure);
        setUV(current.uvi);
        const { daily } = responseWeather;
        setMinTemp(daily[0].temp.min.toFixed(1));
        setMaxTemp(daily[0].temp.max.toFixed(1));
      } catch (err) {
        console.log("CurrentWeather.js API Error");
      } finally {
        setIsLoading(false);
      }
    };
    const updateCity = () =>
      props.city === undefined
        ? fetchData()
        : (setCity(props.city), fetchData());
    updateCity();
  }, [props.city]);

  return (
    <div className="fontStyle">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
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
            {/* <Row style={{ textAlign: "left" }}> */}
            <Col xs sm md={12} className="my-auto">
              Low: {minTemp}°
            </Col>
            <Col xs sm md={12} className="my-auto">
              High: {maxTemp}°
            </Col>
            {/* </Row> */}
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
                {windSpeed} mph {Convert.getDirection(windDirection)}
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
};

export default CurrentWeather;
