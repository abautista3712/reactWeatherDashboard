import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import API from "../utils/API";
import moment from "moment";
import "./FiveDayTable.css";

function FiveDayTable() {
  const [isLoading, setIsLoading] = useState(true);
  const [weather, setWeather] = useState({ weather: [] });

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const fetchWeather = await API.getWeather("Los Angeles");
        const responseWeather = await fetchWeather.data.daily.filter(
          (rawData, index) => index > 0
        );
        setWeather(responseWeather);
      } catch (err) {
        console.log("FiveDayTable.js API Error");
      } finally {
        console.log("FiveDayTable loaded!");
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

  const daysOfWeek = [1, 2, 3, 4, 5, 6, 7];

  return (
    <Row>
      {isLoading ? (
        console.log("FiveDatTable Loading...")
      ) : (
        <Col>
          <div
            className="mb-1 fontStyle"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
          >
            5-Day Forecast
          </div>
          <Table borderless striped size="sm">
            <thead
              className="fontStyle"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            >
              <tr>
                <th></th>
                {daysOfWeek.map((day) => {
                  return <th>{moment().add(day, "days").format("dddd")}</th>;
                })}
              </tr>
              <tr>
                <th></th>
                {daysOfWeek.map((day) => {
                  return <th>{moment().add(day, "days").format("M/DD")}</th>;
                })}
              </tr>
            </thead>
            <tbody
              className="fontStyle"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
            >
              <tr>
                <td className="my-auto py-auto">Condition</td>
                {weather.map((filteredData) => {
                  return (
                    <td>
                      <img
                        src={`http://openweathermap.org/img/w/${filteredData.weather[0].icon}.png`}
                        alt="Weather Icon"
                        style={{ height: "100%" }}
                      />
                    </td>
                  );
                })}
              </tr>
              <tr>
                <td>Temperature (°F)</td>
                {weather.map((filteredData) => {
                  return (
                    <td>
                      {filteredData.temp.min.toFixed(0)}°/
                      {filteredData.temp.max.toFixed(0)}°
                    </td>
                  );
                })}
              </tr>
              <tr>
                <td>Humidity (%)</td>
                {weather.map((filteredData) => {
                  return <td>{filteredData.humidity}%</td>;
                })}
              </tr>
              <tr>
                <td>Wind (mph)</td>
                {weather.map((filteredData) => {
                  return (
                    <td>
                      {filteredData.wind_speed}{" "}
                      {getDirection(filteredData.wind_deg)}
                    </td>
                  );
                })}
              </tr>
              <tr>
                <td>UV Index</td>
                {weather.map((filteredData) => {
                  return <td>{filteredData.uvi}</td>;
                })}
              </tr>
            </tbody>
          </Table>
        </Col>
      )}
    </Row>
  );
}

export default FiveDayTable;
