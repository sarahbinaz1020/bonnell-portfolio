import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../../components/Header/Header";
import "./dashboard.css";

function Dashboard() {
  return (
    <>
      <Container className="listofskills d-flex justify-content-center">
        <Row>
          <Col>
            <Header></Header>
          </Col>
          <Row>
            <Col className="dashboardtxt text-justify">
              <p className="mt-5 mb-5" id="list">
                Actively seeking a position for{" "}
                <strong>
                  <em>Front End Developer</em>
                </strong>
                , having just finished my Certification in Full Stack Web
                Development through the University of Arizona/Trilogy.
              </p>
              <p id="list">
                This course taught me the process of
                learning computer languages and how to effectively and
                efficiently search for the tools needed to get an intended
                output. It was a fairly easy learning curve
                once I figured out the patterns within the processes; it's just like learning any spoken language.
              </p>
              <p id="list">
                I've had an enduring fascination with coding, I made the switch and dove in
                head-first. Haven't looked back.
              </p>
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
