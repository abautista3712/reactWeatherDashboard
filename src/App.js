import React from "react";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import CurrentWeather from "./Components/CurrentWeather";
import FiveDayTable from "./Components/FiveDayTable";
import SearchCity from "./Components/SearchCity";
// import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <Container className="text-center backgroundImg">
      <CurrentWeather />
      <FiveDayTable />
      <SearchCity />
    </Container>
  );
}

export default App;
