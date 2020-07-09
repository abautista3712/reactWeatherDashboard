import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function SearchCity() {
  return (
    <Row>
      <Col style={{ borderStyle: "solid" }} xs={2} sm={2} md={2} lg={2} xl={2}>
        Search
      </Col>
      <Col style={{ borderStyle: "solid" }}>Search Input</Col>
    </Row>
  );
}

export default SearchCity;
