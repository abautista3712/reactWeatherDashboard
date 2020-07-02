import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
// import logo from "./logo.svg";
// import "./App.css";

function App() {
  return (
    <Container>
      <Row>
        <Col>City Name</Col>
      </Row>
      <Row>
        <Col>Temperature</Col>
      </Row>
      <Row>
        <Col>Weather</Col>
        <Col>Icon</Col>
      </Row>
      <Row>
        <Col>Humidity</Col>
        <Col>Wind</Col>
        <Col>UV</Col>
      </Row>
      <Row>
        <Col>
          <Table>
            <thead>
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
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row>
        <Col>Search</Col>
      </Row>
    </Container>
  );
}

export default App;
