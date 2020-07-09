import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import API from "../utils/API";

function FiveDayTable() {
  useEffect(() => {
    API.getWeather().then((res) => {
      console.log(res);
    });
  });
  return (
    <Row>
      <Col>
        <Table>
          <thead style={{ background: "rgba(0,0,0,.5)", color: "white" }}>
            <tr>
              <th>Date</th>
              <th>Temperature</th>
              <th>Condition</th>
              <th>Humidity</th>
              <th>Wind</th>
              <th>UV Index</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </Col>
    </Row>
  );
}

export default FiveDayTable;
