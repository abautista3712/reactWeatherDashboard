import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import moment from "moment";

function CurrentDate() {
  //   const [date] = useState(moment().format("LLL"));
  const [date, setDate] = useState(moment().format("LLL"));

  setTimeout(function () {
    setDate(moment().format("LLL"));
  }, 1000);

  return <Col>{date};</Col>;
}

export default CurrentDate;
