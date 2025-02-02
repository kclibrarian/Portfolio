import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Lindsey Lasswell </span>
            from <span className="purple"> Olathe, KS</span>
            <br />
            Proactive and detail-oriented Software Engineer with 3 years of
            experience designing, building, and optimizing scalable web
            applications using TypeScript, React, and AWS. 
            <br />
            Skilled in collaborating with diverse teams to deliver efficient and user-centric solutions. 
            <br />
            Demonstrates expertise in modern development practices, performance tuning, and delivering high-quality software products within Agile frameworks.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing music
            </li>
            <li className="about-activity">
              <ImPointRight /> Backpacking and hiking
            </li>
            <li className="about-activity">
              <ImPointRight /> Running
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Lasswell</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
