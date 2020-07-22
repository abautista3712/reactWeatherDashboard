import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

function SearchCity(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults] = useState([]);
  const handleChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
  };

  // useEffect(() => {
  //   const results = people.filter((person) =>
  //     person.toLowerCase().includes(searchTerm)
  //   );
  //   setSearchResults(results);
  // }, [searchTerm]);

  return (
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
            />
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
