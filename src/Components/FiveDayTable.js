import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import API from "../utils/API";

function FiveDayTable() {
  const [date, setDate] = useState();
  const [temperature, setTemperature] = useState();
  const [condition, setCondition] = useState();
  const [humidity, setHumidity] = useState();
  const [wind, setWind] = useState();
  const [windDirection, setWindDirection] = useState();
  const [UV, setUV] = useState();

  useEffect(() => {
    API.getFiveDayForecast().then((res) => {
      console.log(res);
      setDate();
      setTemperature(res.data.list[2].main.temp);
      setCondition(res.data.list[2].weather[0].main);
      setHumidity(res.data.list[2].main.humidity);
      setWind(res.data.list[2].wind.speed);
      setWindDirection(res.data.list[2].wind.deg);
      setUV();
    });
  }, []);

  // const noonArr = [2, 10, 18, 26, 34];

  return (
    <Row>
      <Col>
        <Table>
          <thead style={{ background: "rgba(0,0,0,.5)", color: "white" }}>
            <tr>
              <th>Date</th>
              <th>Temperature</th>
              <th>Condition</th>
              <th>Humidity</th>
              <th>Wind</th>
              <th>UV Index</th>
            </tr>
          </thead>
          <tbody>
            {/* Tomorrow */}
            <tr>
              <td>{date}</td>
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
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
            </tr>
            {/* +3 Days */}
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
            </tr>
            {/* +4 Days */}
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
            </tr>
            {/* +5 Days */}
            <tr>
              <td>1</td>
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
