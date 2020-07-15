import React from "react";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import CurrentWeather from "./Components/CurrentWeather";
import FiveDayTable from "./Components/FiveDayTable";
import SearchCity from "./Components/SearchCity";
// import API from "./utils/API";
// import logo from "./logo.svg";
import "./App.css";

const clouds = "./assets/images/clouds.jpg";

function App() {
  return (
    <Container
      className="text-center mx-0 px-0"
      style={{
        height: "100vh",
        width: "100vw",
        backgroundImage: `url(${clouds})`,
        backgroundSize: "cover",
      }}
    >
      <SearchCity />
      <CurrentWeather />
      <FiveDayTable />
    </Container>
  );
}

export default App;
