import Form from "react-bootstrap/Form";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

export function MyFrom({ get }) {
  let [count, setcount] = useState(null);
  // let [error, setError] = useState({
  // });

  let [errorname, setErrorname] = useState("");
  let [errorage, setErrorage] = useState("");
  let [valuename, setValueName] = useState("");
  let [valueAge, setValueAge] = useState(null);
  let [Data, setData] = useState([]);
  useEffect(() => {
    get(Data);
  }, [Data]);
  const getvaluename = (e) => {
    setValueName(e.target.value);
  };

  const getvalueage = (e) => {
    setValueAge(e.target.value);
  };

  function addStudent(e) {
    let flag = true;
    console.log(valuename.length);
    if (valuename.length < 3 || valuename === "") {
      setErrorname("name must be more than 3 crachter");
      flag = false;
    }

    if (valueAge < 18 || valueAge == null) {
      setErrorage("age must be greater than 18");
      flag = false;
    }
    if (flag) {
      setcount((count = count + 1));
      let student = {
        id: count,
        name: valuename,
        age: valueAge,
      };
      setData([...Data, student]);
      setValueName("");
      setValueAge("");
    }
  }

  return (
    <div>
      <div className="container">
        <Form.Control
          type="text"
          placeholder="enter name of student "
          onChange={getvaluename}
        />
        <p className="text-danger">{errorname}</p>
        <br />
        <Form.Control
          type="number"
          placeholder=" enter age of student"
          onChange={getvalueage}
        />
        <p className="text-danger">{errorage} </p>
        <br />
        <Button variant="primary" onClick={addStudent}>
          Add Student
        </Button>
      </div>
    </div>
  );
}
