import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./header.css";

function Header() {
  return (
    
      <Container className="mt-5"fluid>
        <Row>
          <Col>
            <Image
              className="mainImage"
              src={process.env.PUBLIC_URL + "/images/run-with-chase.jpg"}
              rounded
              fluid
            />
          </Col>
          <Col className="align-items-center">
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
            <p className="headertxt">Feel free to peruse, I welcome any feedback given!</p>
          </Col>
        </Row>
      </Container>
   
  );
}

export default Header;
