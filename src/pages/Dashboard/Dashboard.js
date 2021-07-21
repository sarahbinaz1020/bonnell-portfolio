import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./dashboard.css";

function Dashboard() {
  return (
    <>
      <Container className="listofskills d-flex justify-content-center">
        <Row>
        <Col className="justify-content-center" fluid>
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
          <Row>
            <Col className="dashboardtxt text-justify">
              
              <p className="text-justify" id="list">
                Skills:
              </p>
              <Row className="mb-3">
                <Col xs={6} md={4} className="text-center">
                  <span style={{ color: "white" }}>
                    <i class="fab fa-html5 fa-3x"></i>
                  </span>{" "}
                  <p id="list">HTML5</p>
                </Col>
                <Col xs={6} md={4} className="text-center">
                  <span style={{ color: "white" }}>
                    <i class="fab fa-css3 fa-3x"></i>
                  </span>{" "}
                  <p id="list">CSS3</p>
                </Col>
                <Col xs={6} md={4} className="text-center">
                  <span style={{ color: "white" }}>
                    <i class="fab fa-js fa-3x"></i>
                  </span>{" "}
                  <p id="list">JavaScript</p>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col xs={6} md={4} className="text-center">
                  <span style={{ color: "white" }} className="">
                    <i class="fab fa-react fa-3x"></i>
                  </span>{" "}
                  <p id="list">ReactJS</p>
                </Col>
                <Col xs={6} md={4} className="text-center">
                  <span style={{ color: "white" }}>
                    <i class="fab fa-node fa-3x"></i>
                  </span>{" "}
                  <p id="list">Node.js</p>
                </Col>
                <Col xs={6} md={4} className="text-center">
                  <span style={{ color: "white" }}>
                    <i class="fab fa-node fa-3x"></i>
                  </span>{" "}
                  <p id="list">Express</p>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col xs={6} md={4} className="text-center">
                  <span style={{ color: "white" }}>
                    <i class="fab fa-js fa-3x "></i>
                  </span>{" "}
                  <p id="list">jQuery</p>
                </Col>
                <Col xs={6} md={4} className="text-center">
                  <span style={{ color: "white" }}>
                    <i class="fab fa-js fa-3x"></i>
                  </span>{" "}
                  <p id="list">Handlebars.js</p>
                </Col>
                <Col xs={6} md={4} className="text-center">
                  <span style={{ color: "white" }}>
                    <i class="fab fa-bootstrap fa-3x"></i>
                  </span>{" "}
                  <p id="list">Bootstrap</p>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col xs={6} md={4} className="text-center">
                  <span style={{ color: "white" }}>
                    <i class="fab fa-html5 fa-3x"></i>
                  </span>{" "}
                  <p id="list">Bootstrap</p>
                </Col>
                <Col xs={6} md={4} className="text-center">
                  <span style={{ color: "white" }}>
                    <i class="fab fa-css3 fa-3x"></i>
                  </span>{" "}
                  <p id="list">Bulma</p>
                </Col>
                <Col xs={6} md={4} className="text-center">
                  <span style={{ color: "white" }}>
                    <i class="fas fa-database fa-3x"></i>
                  </span>{" "}
                  <p id="list">MySQL</p>
                </Col>
              </Row>
              <Row>
                <Col xs={6} md={4} className="text-center">
                  <span style={{ color: "white" }}>
                    <i class="fas fa-database fa-3x"></i>
                  </span>{" "}
                  <p id="list">MongoDB</p>
                </Col>
                <Col xs={6} md={4} className="text-center">
                  <span style={{ color: "white" }}>
                    <i class="fas fa-database fa-3x"></i>
                  </span>{" "}
                  <p id="list">Sequelize</p>
                </Col>
                <Col xs={6} md={4} className="text-center">
                  <span style={{ color: "white" }}>
                    <i class="fas fa-database fa-3x"></i>
                  </span>{" "}
                  <p id="list">Mongoose</p>
                </Col>
              </Row>
            </Col>
          </Row>
         
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;
