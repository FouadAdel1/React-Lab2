import React, { useState } from "react";
import Card from "react-bootstrap/Card";

export function Artecle({ data }) {
  let tempCards = [
    { title: "fouad", body: " some words for test" },
    { title: "eman", body: "buy any thing to check" },
    { title: "test for earch ", body: "check for search" },
    { title: "adel", body: "testdatqe  sadas sdd" },
  ];

  let arr = tempCards.filter((c) => {
    if (c.title.match(data) || c.body.match(data)) {
      return c;
    }
  });
  if (arr.length <= 0) {
    arr.push({ title: "Not found", body: "there is  no data " });
  }
  return (
    <div>
      {arr.map((card) => {
        return (
          <Card className="my-5" key={card.title}>
            <Card.Header>{card.title}</Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>{card.body}</p>
              </blockquote>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}
