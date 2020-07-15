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
  // const [weather, setWeather] = useState({ list: [] });
  const [wind, setWind] = useState();
  const [windDirection, setWindDirection] = useState();
  const [UV, setUV] = useState();

  useEffect(() => {
    API.getUV().then((res) => {
      // console.log(res);
      setUV(res.data[0].value);
    });
    API.getFiveDayForecast().then((res) => {
      // console.log(res);
      setTemperature(res.data.list[2].main.temp);
      setCondition(res.data.list[2].weather[0].main);
      setHumidity(res.data.list[2].main.humidity);
      setWind(res.data.list[2].wind.speed);
      setWindDirection(res.data.list[2].wind.deg);
      // setWeather(res.data.list);
    });
    // console.log(weather);
  }, []);

  // const noonArr = [2, 10, 18, 26, 34];
  // useEffect(() => {
  //   console.log(
  //     weather.map((data, index) => {
  //       data;
  //     }
  //   );
  // });

  return (
    <Row>
      {/* {console.log(coord)} */}
      <Col>
        <Table>
          <thead className="backgroundHeader fontColor">
            <tr>
              <th>Date</th>
              <th>Temperature</th>
              <th>Condition</th>
              <th>Humidity</th>
              <th>Wind</th>
              <th>UV Index</th>
            </tr>
          </thead>
          <tbody className="backgroundColor fontColor">
            {/* Tomorrow */}
            <tr>
              <td>{moment().add(1, "days").format("l")}</td>
              <td>{temperature}</td>
              <td>{condition}</td>
              <td>{humidity} %</td>
              <td>
                {wind} m/s {windDirection}
              </td>
              <td>{UV}</td>
            </tr>
            {/* +2 Days */}
            <tr>
              <td>{moment().add(2, "days").format("l")}</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
            </tr>
            {/* +3 Days */}
            <tr>
              <td>{moment().add(3, "days").format("l")}</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
            </tr>
            {/* +4 Days */}
            <tr>
              <td>{moment().add(4, "days").format("l")}</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
            </tr>
            {/* +5 Days */}
            <tr>
              <td>{moment().add(5, "days").format("l")}</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
            </tr>
          </tbody>
        </Table>
      </Col>
    </Row>
  );
}

export default FiveDayTable;
