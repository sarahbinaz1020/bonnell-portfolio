import React from "react";
// import ContactForm from "../../components/ContactForm/ContactForm";
import { Container, Row, Col, Image, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./contact.css";

function Contact() {
  return (
    <>
      <Row>
        {/* Contact text img */}
        <Col className="fs-2 fw-bolder">
          <Image
            className="mx-auto d-block"
            src={process.env.PUBLIC_URL + "/images/contact-145766.png"}
            rounded
            fluid
          />
        </Col>
      </Row>
      {/* Put contact form here when finished */}
      <Container className="">
        <Row className="">
          <h3 className="contacttext mt-4 mb-4 text-center">ways to find me:</h3>
        </Row>
        </Container>

        <Container className="justify-content-center">
        <Row className="ml-5 mr-5 justify-content-md-center"><Col></Col><Col>
        <Table className="table table-borderless" style={{height: "350px", }}>
          <tbody className="ml-5 mr-5 ">
            <tr >
              {/* email */}

              <td className=""  >
                <span style={{ color: "white" }} className="align-middle">
                  {" "}
                  <i className="far fa-envelope fa-3x "></i>
                </span>
              </td>
              <td className="">
                {" "}
                <Link to="sarahbinaz1020@gmail.com">
                  {" "}
                  <p className="emailtext">sarahbinaz1020@gmail.com</p>
                </Link>
              </td>
            
           
            </tr>
            <tr className="">
              {/* phone */}
              
              <td>
                <span style={{ color: "white" }}>
                  {" "}
                  <i className="icon-phone fas fa-phone-alt fa-3x"></i>
                </span>
              </td>
              <td>
                {" "}
                <p className="emailtext">602-619-4644 </p>
              </td>
            </tr>
            <tr>
              {/* github */}
              
              <td>
                <span style={{ color: "white" }}>
                  <i className="fab fa-github fa-3x"></i>
                </span>
              </td>
              <td>
                <Link to="https://github.com/sarahbinaz1020">
                  <p className="emailtext">https://github.com/sarahbinaz1020</p>
                </Link>
              </td>
            </tr>
            <tr>
              {/* linkedin */}
              <td>
                <span style={{ color: "white" }}>
                  <i className="fab fa-linkedin fa-3x"></i>
                </span>
              </td>
              <td>
                <Link to="https://www.linkedin.com/in/sarah-bonnell-1965555a/">
                  <p className="emailtext">
                    https://www.linkedin.com/in/sarah-bonnell-1965555a/
                  </p>
                </Link>
              </td>
            </tr>
          </tbody>
        </Table></Col><Col></Col></Row>
      </Container>
    </>
  );
}

export default Contact;
