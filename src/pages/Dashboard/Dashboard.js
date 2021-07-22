import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./dashboard.css";

function Dashboard() {
  return (
    <>
      <Container className="d-flex justify-content-center">
        <Row>
          <Row>
            <Col>
              <img
                src={process.env.PUBLIC_URL + "/images/hello.png"}
                className="hello-title figure-img img-fluid rounded d-block mx-auto"
                alt="..."
              />
            </Col>
          </Row>
          <Col className="">
            <img
              className="mainImage mt-5"
              src={process.env.PUBLIC_URL + "/images/bonnell-headshot.jpg"}
              rounded
              alt=""
            />

            <h3 className="header mt-4">Nice to meet you</h3>
            <p className="headertxt">
              My name is Sarah.
              <br></br>
              <br></br>
              Junior Web Developer with a background in commercial real estate
              and marketing coupled with a life-long dedication to learning.
              Skilled in HTML5, CSS, JavaScript, Wireframing, and User Interface
              Development.
              <br></br>
              <br></br>
              Driven by collaborative and independent efforts to combine
              creativity and problem solving to develop user-friendly
              applications. Strengths lie in effective communication for both
              user and business needs, and a tenacious work ethic.
              <br></br>
              <br></br>
              When not building useful and visually appealing applications, you
              can find me hiking, running, or experimenting on new sweet recipes
              in the kitchen.
            </p>
            <div>
              <a
              className="resume-link"
                href="https://drive.google.com/file/d/1PdPPVWDQrDSOSrAmNP79qaqPq1I1TRTT/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <strong><em>Click here to view my resume</em></strong>
              </a>
            </div>
          </Col>
          <Row>
            <Col className="dashboardtxt text-justify">
              <p
                className="text-center fs-4 mt-5 mb-4 border-bottom"
                id="list-title"
              >
                Skills:
              </p>

              {/* Row 1 */}
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

              {/* Row 2 */}
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

              {/* Row 3 */}
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

              {/* Row 4 */}
              <Row className="mb-3">
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
                <Col xs={6} md={4} className="text-center">
                  <span style={{ color: "white" }}>
                    <i class="fas fa-database fa-3x"></i>
                  </span>{" "}
                  <p id="list">MongoDB</p>
                </Col>
              </Row>

              {/* Row 5 */}

              <Row className="mb-5">
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
                <Col></Col>
              </Row>
            </Col>
          </Row>{" "}
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;
