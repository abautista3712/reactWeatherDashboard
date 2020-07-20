import React from "react";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import CurrentWeather from "./Components/CurrentWeather";
import FiveDayTable from "./Components/FiveDayTable";
// import API from "./utils/API";
// import logo from "./logo.svg";
import "./App.css";

const clouds = "./assets/images/clouds.jpg";

function App() {
  return (
    <Container
      className="text-center"
      style={{
        height: "100vh",
        backgroundImage: `url(${clouds})`,
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
