import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import moment from "moment";

function CurrentDate() {
  //   const [date] = useState(moment().format("LLL"));
  const [date, setDate] = useState(moment().format("MMMM Do YYYY, h:mm:ss a"));

  setTimeout(function () {
    setDate(moment().format("MMMM Do YYYY, h:mm:ss a"));
  }, 1000);

  return <Col>{date};</Col>;
}

export default CurrentDate;
