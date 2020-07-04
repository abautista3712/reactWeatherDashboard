import React from "react";
import Table from "react-bootstrap/Table";

function FiveDayTable() {
  return (
    <Table>
      <thead>
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
  );
}

export default FiveDayTable;
