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
  const [isLoading, setIsLoading] = useState(false);
  const [test, setTest] = useState(false);

  // High level:
  // 1) Take search query result and pass it to API
  useEffect(() => {
    async function fetchData() {
      try {
        const fetch = await API.getWeather(searchTerm);
        const res = await fetch.data;
        if (res == undefined) {
          return;
        } else {
          setSearchResults(res);
          console.log("fetchData() Success");
        }
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [searchTerm]);

  return (
    <div>
      <form>
        {/* {
        (searchResults ? console.log(searchResults) : console.log(searchTerm),
        console.log(searchResults),
        console.log("searchResults Loading"))
      } */}
        <h1>
          {/* {console.log(searchResults)}
        {searchResults ? console.log(searchResults) : ""}
        {searchTerm}
        {test.testKey}
      {props.test} */}
        </h1>
        <Row>
          {/* <Greeting greeting={greeting} /> */}
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
            {/* <ul>
            {searchResults.map((item) => (
              <li>{item}</li>
              ))}
            </ul> */}
          </Col>
        </Row>
      </form>
      <CurrentWeather {...searchResults} />
    </div>
  );
}

export default SearchCity;
