import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import API from "./utils/API";
import "bootstrap/dist/css/bootstrap.min.css";
import FiveDayTable from "./Components/FiveDayTable";
// import logo from "./logo.svg";
// import "./App.css";

function App() {
  useEffect(() => {
    API.getWeather().then((res) => {
      console.log(res);
    });
  });

  return (
    <Container className="text-center">
      <Row>
        <Col>City Name</Col>
      </Row>
      <Row>
        <Col>Temperature</Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col xs sm md lg xl="2">
          Weather
        </Col>
        <Col>Icon</Col>
      </Row>
      <Row>
        <Col>Humidity</Col>
        <Col>hData</Col>
        <Col>Wind</Col>
        <Col>wData</Col>
        <Col>UV</Col>
        <Col>uvData</Col>
      </Row>
      <Row>
        <Col>
          <FiveDayTable />
        </Col>
      </Row>
      <Row>
        <Col>Search</Col>
      </Row>
    </Container>
  );
}

export default App;
