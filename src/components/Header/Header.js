import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
// import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    
      <Container className="mt-5"fluid>
        <Row>
          <Col>
            <Image
              className="mainImage mt-5"
              src={process.env.PUBLIC_URL + "/images/run-with-chase.jpg"}
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
              Lover of life, animals, and nature, I strive to enjoy every minute on
              this planet.
            </p>
            <p className="headertxt">
              Every opportunity presented provides a chance to
              learn something new, and what's better than enriching your understanding of the world around you!
            </p>
            <p className="headertxt">Feel free to peruse; I welcome any feedback.</p>
            <div>

            <a href="https://drive.google.com/file/d/1PdPPVWDQrDSOSrAmNP79qaqPq1I1TRTT/view?usp=sharing" alt=""/>
                <p className="headertxt justify-content-end"> <strong>Click here to view my resume</strong></p>
            </div>
             
          </Col>
        </Row>
      </Container>
   
  );
}

export default Header;
