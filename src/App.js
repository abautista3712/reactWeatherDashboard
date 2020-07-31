import React from "react";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import CurrentWeather from "./Components/CurrentWeather";
import FiveDayTable from "./Components/FiveDayTable";
// import API from "./utils/API";
// import logo from "./logo.svg";
import "./App.css";

const clearSky = "";
const fewClouds = "./assets/images/fewClouds.jpg";
const scatteredClouds = "./assets/images/scatteredClouds.jpg";
const brokenClouds = "./assets/images/brokenClouds.jpg";
const showerRain = "";
const rain = "";
const thunderstorm = "";
const snow = "";
const mist = "";

function App() {
  return (
    <Container
      className="text-center"
      style={{
        minHeight: "100vh",
        maxHeight: "100%",
        backgroundImage: `url(${fewClouds})`,
        backgroundSize: "cover",
      }}
      fluid
    >
      <CurrentWeather />
      <FiveDayTable />
    </Container>
  );
}

export default App;
