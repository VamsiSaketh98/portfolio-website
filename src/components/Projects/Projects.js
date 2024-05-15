import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import paytm from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
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
              imgPath={paytm}
              isBlog={false}
              title="PayTM"
              description="Our innovative platform empowers you to take control of your finances.  Sign up, manage your  wallet balance, send money seamlessly, and access advanced features like transaction history and QR code integration (coming soon). We leverage cutting-edge technologies (MongoDB, Tailwind CSS, Axios) for a robust and user-friendly experience"
              ghLink="https://github.com/VamsiSaketh98/Paytm-Clone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Gemini-clone"
              description="Powered by cutting-edge AI: This project leverages the capabilities of the Google Gemini API 1.5 to deliver innovative text generation features."
              ghLink="https://github.com/VamsiSaketh98/Gemini-Clone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="YouTube Clone"
              description="The video platform you already know and love, with a fresh twist. (Appeals to users comfortable with YouTube)"
              ghLink="https://github.com/VamsiSaketh98/Youtube-Clone"             
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
