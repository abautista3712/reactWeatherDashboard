import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import CurrentWeather from "./Components/CurrentWeather";
import FiveDayTable from "./Components/FiveDayTable";
// import logo from "./logo.svg";
// import "./App.css";

function App() {
  return (
    <Container className="text-center">
      <CurrentWeather />
      <FiveDayTable />
      <Row>
        <Col>Search</Col>
      </Row>
    </Container>
  );
}

export default App;
