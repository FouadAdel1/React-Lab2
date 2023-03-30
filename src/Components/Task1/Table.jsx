import React from 'react'
import { Table } from "react-bootstrap";
export function MyTable({find}) {
  return (
    <div className="container">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>name</th>
            <th>age</th>
          </tr>
        </thead>
        <tbody>
          {find.map((obj) => {
            return (
              <tr key={obj.id}>
                <td>{obj.id}</td>
                <td>{obj.name}</td>
                <td>{obj.age}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
