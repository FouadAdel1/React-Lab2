import React, { useState } from "react";
import { MyFrom } from "./MyForm";
import { MyTable } from "./Table";

export default function Task1() {

 let [test, settest] = useState([]);
  let GetData = (data) => {
    settest(data)
  }

  return (
    <div>
      <MyFrom get={ GetData} />
      <br />
      <MyTable find={test} />
    </div>
  );
}
