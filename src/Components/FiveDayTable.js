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
        const fetcher = await API.getFiveDayForecast("Los Angeles");
        const response = await fetcher.data.list.filter(
          (rawData, index) =>
            (index === 2) |
            (index === 10) |
            (index === 18) |
            (index === 26) |
            (index === 34)
        );
        setWeather(response);
      } catch (err) {
        console.log("Error");
      } finally {
        setIsLoading(false);
      }
      // .map((filteredData) => {
      //   return filteredData;
      //   // console.log(filteredData);
      // })
      // );

      // console.log(weather);
      // });
    }
    fetchData();
    console.log("useEffect has been called");
  }, []);

  return (
    <Row>
      {isLoading ? (
        console.log("Loading")
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
                <th>Date</th>
                <th>Temperature</th>
                <th>Condition</th>
                <th>Humidity</th>
                <th>Wind</th>
                {/* <th>UV Index</th> */}
              </tr>
            </thead>
            <tbody
              className="fontStyle"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
            >
              {/* Tomorrow */}
              <tr>
                <td>{moment().add(1, "days").format("l")}</td>
                {/* <td> */}
                {weather.map((filteredData) => {
                  return (
                    console.log(filteredData),
                    (<td>{filteredData.main.temp}°</td>)
                  );
                  // <td>{filteredData.main</td>;
                })}

                {/* </td> */}
                <td>{condition}</td>
                <td>{humidity} %</td>
                <td>
                  {wind} m/s {windDirection}
                </td>
                {/* <td>{UV}</td> */}
              </tr>
              {/* +2 Days */}
              <tr>
                <td>{moment().add(2, "days").format("l")}</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                {/* <td>UV</td> */}
              </tr>
              {/* +3 Days */}
              <tr>
                <td>{moment().add(3, "days").format("l")}</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                {/* <td>UV</td> */}
              </tr>
              {/* +4 Days */}
              <tr>
                <td>{moment().add(4, "days").format("l")}</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                {/* <td>UV</td> */}
              </tr>
              {/* +5 Days */}
              <tr>
                <td>{moment().add(5, "days").format("l")}</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                {/* <td>UV</td> */}
              </tr>
            </tbody>
          </Table>
        </Col>
      )}
    </Row>
  );
}

export default FiveDayTable;
