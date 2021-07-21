import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
// import { HashRouter as Router, Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <Container className="mt-5" fluid>
      <Row>
        <Col>
          <Image
            className="mainImage mt-5"
            src={process.env.PUBLIC_URL + "/images/bonnell-headshot.jpg"}
            rounded
            fluid
          />
        </Col>
        <Col className="align-items-center">
          <img
            src={process.env.PUBLIC_URL + "/images/hello.png"}
            className="portfolio-title figure-img img-fluid rounded mx-auto d-block"
            alt="..."
          />
          <h1 className="header">Nice to meet you</h1>
          <p className="headertxt">My name is Sarah.</p>
          <p className="headertxt">
            Junior Web Developer with a background in commercial real estate and
            marketing coupled with a life-long dedication to learning.
            Certificate in Full Stack Web Development from University of Arizona
            Coding Boot Camp with skills in HTML5, CSS, JavaScript, Wireframing,
            and User Interface Development. Driven by collaborative and
            independent efforts to combine creativity and problem solving to
            develop user-friendly applications. An Economics and French language
            background, strong research skills with an eye for detail, and big
            picture vision make me a significant addition to any team. 
          </p>
          <div>
            <a
              href="https://drive.google.com/file/d/1PdPPVWDQrDSOSrAmNP79qaqPq1I1TRTT/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Click here to view my resume
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
