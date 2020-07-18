import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const people = [
  "Siri",
  "Alexa",
  "Google",
  "Facebook",
  "Twitter",
  "LinkedIn",
  "SinkedIn",
];

function SearchCity() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const results = people.filter((person) =>
      person.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <form>
      <Row>
        <Col style={{ borderStyle: "solid" }}>
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleChange}
          />
          <ul>
            {searchResults.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </Col>
        <Col
          style={{ borderStyle: "solid" }}
          xs={2}
          sm={2}
          md={2}
          lg={2}
          xl={2}
        >
          Search
        </Col>
      </Row>
    </form>
  );
}

export default SearchCity;
