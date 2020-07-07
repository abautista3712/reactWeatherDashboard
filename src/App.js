import React from "react";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import CurrentWeather from "./Components/CurrentWeather";
import FiveDayTable from "./Components/FiveDayTable";
import SearchCity from "./Components/SearchCity";
// import logo from "./logo.svg";
// import "./App.css";

const clouds = "./assets/images/clouds.jpg";

function App() {
  return (
    <Container
      className="text-center"
      style={{ backgroundImage: `url(${clouds})` }}
    >
      <CurrentWeather />
      <FiveDayTable />
      <SearchCity />
    </Container>
  );
}

export default App;
