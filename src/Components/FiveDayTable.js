import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import API from "../utils/API";
import moment from "moment";
import "./FiveDayTable.css";

function FiveDayTable() {
  const [temperature, setTemperature] = useState();
  const [condition, setCondition] = useState();
  const [humidity, setHumidity] = useState();
  const [wind, setWind] = useState();
  const [windDirection, setWindDirection] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [weather, setWeather] = useState({ weather: [] });
  // const [UV, setUV] = useState();

  // useEffect(() => {
  //   // API.getUV().then((res) => {
  //   //   console.log(res);
  //   //   setUV(res.data[0].value);
  //   // });
  //   API.getFiveDayForecast("Los Angeles").then((res) => {
  //     // console.log(res);
  //     setTemperature(res.data.list[2].main.temp);
  //     setCondition(res.data.list[2].weather[0].main);
  //     setHumidity(res.data.list[2].main.humidity);
  //     setWind(res.data.list[2].wind.speed);
  //     setWindDirection(res.data.list[2].wind.deg);
  //     // setWeather(res.data.list);
  //   });
  //   // console.log(weather);
  // }, []);

  // let noonArr = [2, 10, 18, 26, 34];
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const fetchWeather = await API.getWeather("Los Angeles");
        const responseWeather = await fetchWeather.data.daily.filter(
          (rawData, index) => index > 0
        );
        setWeather(responseWeather);
        console.log(responseWeather);
      } catch (err) {
        console.log("FiveDayTable.js API Error");
      } finally {
        console.log("FiveDayTable loaded!");
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

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
                <th>{moment().add(1, "days").format("dddd")}</th>
                <th>{moment().add(2, "days").format("dddd")}</th>
                <th>{moment().add(3, "days").format("dddd")}</th>
                <th>{moment().add(4, "days").format("dddd")}</th>
                <th>{moment().add(5, "days").format("dddd")}</th>
                <th>{moment().add(6, "days").format("dddd")}</th>
                <th>{moment().add(7, "days").format("dddd")}</th>
              </tr>
              <tr>
                <th></th>
                <th>{moment().add(1, "days").format("M/DD")}</th>
                <th>{moment().add(2, "days").format("M/DD")}</th>
                <th>{moment().add(3, "days").format("M/DD")}</th>
                <th>{moment().add(4, "days").format("M/DD")}</th>
                <th>{moment().add(5, "days").format("M/DD")}</th>
                <th>{moment().add(6, "days").format("M/DD")}</th>
                <th>{moment().add(7, "days").format("M/DD")}</th>
              </tr>
            </thead>
            <tbody
              className="fontStyle"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
            >
              <tr>
                <td>Condition</td>
                {weather.map((filteredData) => {
                  return (
                    <td>
                      <img
                        src={`http://openweathermap.org/img/w/${filteredData.weather[0].icon}.png`}
                        alt="Weather Icon"
                      />
                    </td>
                  );
                })}
              </tr>
              <tr>
                <td>Temperature</td>
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
                <td>Humidity</td>
                {weather.map((filteredData) => {
                  return <td>{filteredData.humidity}%</td>;
                })}
              </tr>
              <tr>
                <td>Wind (MPH)</td>
                {weather.map((filteredData) => {
                  return (
                    console.log(filteredData),
                    (<td>{filteredData.wind_speed.toFixed(1)}</td>)
                  );
                })}
              </tr>
              <tr>
                <td>UV Index</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      )}
    </Row>
  );
}

export default FiveDayTable;
