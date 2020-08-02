import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import API from "../utils/API";
import CurrentWeather from "./CurrentWeather";

function SearchCity() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState();
  const handleChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
  };

  useEffect(() => {
    async function verifyCity() {
      try {
        const fetchWeather = await API.getWeather(searchTerm);
        const resWeather = await fetchWeather.data;
        if (resWeather === undefined) {
          return;
        } else {
          const fetchCity = await API.getCity(searchTerm);
          const resCity = await fetchCity.data.city.name;
          setSearchResults(resCity);
        }
      } catch (err) {
        console.log(err);
      }
    }
    verifyCity();
  }, [searchTerm]);

  return (
    <div>
      <form>
        <Row>
          <Col className="pt-1 px-1">
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text style={{ backgroundColor: "#fff" }}>
                  <i className="fas fa-search mx-1"></i>
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                type="text"
                placeholder="Search City"
                value={searchTerm}
                onChange={handleChange}
                style={{ boxShadow: "none" }}
              />
            </InputGroup>
          </Col>
        </Row>
      </form>
      <CurrentWeather city={searchResults} />
    </div>
  );
}

export default SearchCity;
