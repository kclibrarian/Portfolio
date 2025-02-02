import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import { FaCat } from "react-icons/fa";
import { IoWarning } from "react-icons/io5";

function Projects() {
  const catIcon = <FaCat />;
  const warningIcon = <IoWarning />;

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              image={catIcon}
              link={"/Portfolio/#/catFact"}
              title="Cat Facts"
              description="API Demo retrieving cat facts using CatFacts API"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              image={warningIcon}
              link={"/#/"}
              title="Coming soon..."
              description="More projects coming soon"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              image={warningIcon}
              link={"/#/"}
              title="Coming soon..."
              description="More projects coming soon"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              image={warningIcon}
              link={"/#/"}
              title="Coming soon..."
              description="More projects coming soon"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              image={warningIcon}
              link={"/#/"}
              title="Coming soon..."
              description="More projects coming soon"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              image={warningIcon}
              link={"/#/"}
              title="Coming soon..."
              description="More projects coming soon"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
