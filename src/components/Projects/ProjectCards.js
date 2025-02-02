import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <div
        className="card-img-top"
        style={{ fontSize: "80px", color: "#555", padding: "20px" }}
      >
        {props.image}
      </div>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {"\n"}
        {"\n"}

        <Button
          variant="primary"
          href={props.link}
          style={{ marginLeft: "10px" }}
        >
          <CgWebsite /> &nbsp;
          {"View"}
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
