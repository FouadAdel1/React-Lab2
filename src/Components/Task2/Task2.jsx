import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Artecle } from "./Artecle";

export default function Task2() {
  let [inputvalue, setInput] = useState("");

  let getvalue = (e) => {
    setInput(e.target.value);
  };
  console.log(inputvalue);
  return (
    <div className="container">
      <Form.Control type="text" placeholder="search" onChange={getvalue} />
      <br />
      <Artecle data={inputvalue} />
    </div>
  );
}
