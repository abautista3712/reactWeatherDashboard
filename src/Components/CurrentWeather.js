import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import API from "../utils/API";

function CurrentWeather() {
  useEffect(() => {
    API.getWeather().then((res) => {
      console.log(res);
    });
  });
  return (
    <div>
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
    </div>
  );
}

export default CurrentWeather;
