import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

function SearchCity(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
  };

  useEffect(() => {
    // const results = people.filter((person) =>
    //   person.toLowerCase().includes(searchTerm)
    // );
    // setSearchResults(results);
  }, [searchTerm]);

  return (
    <form>
      <Row>
        <Col className="pt-1 px-1">
          <InputGroup>
            <FormControl
              type="text"
              placeholder="Search City"
              value={searchTerm}
              onChange={handleChange}
            />
            <InputGroup.Append>
              <Button style={{ backgroundColor: "lightgrey" }}>
                <i className="fas fa-search mx-1"></i>
              </Button>
            </InputGroup.Append>
          </InputGroup>
          <ul>
            {searchResults.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </Col>
      </Row>
    </form>
  );
}

export default SearchCity;
