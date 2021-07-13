import React from "react";
// import ContactForm from "../../components/ContactForm/ContactForm";
import { Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GrGithub, GrLinkedin, GrPhone } from "react-icons/gr";
import "./contact.css";


function Contact() {
  return (
    <>
      <Row>
        {/* Contact header text */}
        <Col className="fs-2 fw-bolder">
          <Image
            className=""
            src={process.env.PUBLIC_URL + "/images/contact.png"}
            rounded
            fluid
          />
        </Col>
      </Row>
      {/* Put contact form here */}
     
      <Row></Row>

      <Row className="mt-5 mb-3 align-items-center" fluid>
        <h3 className="contacttext mb-4">other ways to find me:</h3>

        <Col className="contacttext fs-6 col-5" fluid>
          <p className="align-items-center">
            <GrPhone className="mobile fs-3"></GrPhone> 602-619-4644
          </p>
        </Col>
        <Col className="fs-2" fluid>
          <Link to="https://github.com/sarahbinaz1020">
            <GrGithub></GrGithub>
          </Link>
        </Col>
        <Col className="fs-2" fluid>
          <Link to="https://www.linkedin.com/in/sarah-bonnell-1965555a/">
            <GrLinkedin></GrLinkedin>
          </Link>
        </Col>
      </Row>
    </>
  );
}

export default Contact;
