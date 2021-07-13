import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import "./dashboard.css";

function Dashboard() {
  return (
    <>
      <Container className="listofskills d-flex justify-content-center">
        <Row >
          <Col>
            <Header></Header>
          </Col>
          <Row > 
          <Col className="dashboardtxt text-justify">
            <p className="mt-5 mb-5" id="list">
              Actively seeking a position for <strong><em>Front End Developer</em></strong>, after having just finished my Certification in Full Stack
              Web Development through the University of Arizona/Trilogy.
            </p>
            <p>
              More than anything, this course taught me the process of learning
              computer languages and how to effectively and efficiently search for the tools needed to get an intended output. Having spent most of my educational years
              learning Spanish, German, and French, it was a fairly easy
              learning curve once I figured out the processes.
            </p>
            <p>
              Long-time fascination with coding, I made the switch and dove in
              head-first. Haven't looked back.
            </p>
            <p className="text-justify" id="list">Skills:</p>
            <ul id="list">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>Handlebars</li>
              <li>Bootstrap</li>
              <li>Bulma</li>
              <li>MySQL</li>
              <li>NoSQL</li>
              <li>Sequelize</li>
              <li>MongoDB</li>
              <li>ReactJS</li>
              <li>Knowledge of MVC, web and server-side APIs</li>
            </ul>
          </Col></Row>
          <Row>
          <Col>
            <Link to="https://docs.google.com/document/d/1h7M_RVbEtxi6nXIBcfGN2F-TLrPn5BXm8KLUeAUb2p0/edit?usp=sharing">
              <strong>Click here to view my resume</strong>
            </Link>
          </Col></Row>
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;
