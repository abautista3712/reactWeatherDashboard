import React from "react";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchCity from "./Components/SearchCity";
import FiveDayTable from "./Components/FiveDayTable";
// import API from "./utils/API";
// import logo from "./logo.svg";
import "./App.css";

// const clearSky = "";
// const fewClouds = "./assets/images/fewClouds.jpg";
const scatteredClouds = "./assets/images/scatteredClouds.jpg";
// const brokenClouds = "./assets/images/brokenClouds.jpg";
// const showerRain = "";
// const rain = "";
// const thunderstorm = "";
// const snow = "";
// const mist = "";

const App = () => {
  return (
    <Container
      className="text-center"
      style={{
        minHeight: "100vh",
        maxHeight: "100%",
        backgroundImage: `url(${scatteredClouds})`,
        backgroundSize: "cover",
      }}
      fluid
    >
      <SearchCity />
      <FiveDayTable />
      {console.log(process.env)}
    </Container>
  );
};

export default App;
