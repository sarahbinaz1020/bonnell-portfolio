import React from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./portfoliocard.css";

function PortfolioCard() {
  return (
    <Container>
      <Row>
        <Col className="mb-3">
          <img
            src={process.env.PUBLIC_URL + "/images/portfolio-00c4cc(2).png"}
            className="portfolio-title figure-img img-fluid rounded mx-auto d-block"
            alt="..."
          />
        </Col>
      </Row>
      <Row><Col></Col>
        <Col xs={10} >
          <Carousel variant="success" className="ml-5 mr-5 mb-5">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + "/images/bathroom-buddy.png"}
                alt="First slide"
              />
              <Carousel.Caption>
                {/* <h3>Bathroom Buddy</h3> */}
                <Link to="https://bathroom-buddy-v1.herokuapp.com/">
                  <p>Deployed App</p>
                </Link>
                <Link to="https://github.com/bhfreeman/restroom-tracker">
                  <p>Code</p>
                </Link>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src={
                  process.env.PUBLIC_URL + "./images/work-day-planner-img.png"
                }
                alt="Second slide"
              />
              <Carousel.Caption>
                {/* <h3>Work Day Scheduler</h3> */}
                <Link to="https://sarahbinaz1020.github.io/Work-Day-Scheduler/">
                  <p>Deployed App</p>
                </Link>
                <Link to="https://github.com/sarahbinaz1020/Work-Day-Scheduler">
                  <p>Code</p>
                </Link>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + "../images/note-taker.png"}
                alt="Third slide"
              />

              <Carousel.Caption>
                {/* <h3>Note Taker</h3> */}
                <Link to="https://note-taker-sb.herokuapp.com/">
                  <p>Deployed App</p>
                </Link>
                <Link to="https://github.com/sarahbinaz1020/note-taker">
                  <p>Code</p>
                </Link>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + "../images/weather-dashboard.png"}
                alt="Third slide"
              />

              <Carousel.Caption>
                {/* <h3>Weather Dashboard</h3> */}
                <Link to="https://sarahbinaz1020.github.io/Weather-Dashboard/index.html">
                  <p>Deployed App</p>
                </Link>
                <Link to="https://github.com/sarahbinaz1020/Weather-Dashboard">
                  <p>Code</p>
                </Link>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + "../images/fitness-tracker.png"}
                alt="Third slide"
              />

              <Carousel.Caption>
                {/* <h3>Fitness Tracker</h3> */}
                <Link to="https://fitness-tracker-8.herokuapp.com/">
                  <p>Deployed App</p>
                </Link>
                <Link to="https://github.com/sarahbinaz1020/fitness-tracker">
                  <p>Code</p>
                </Link>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src={
                  process.env.PUBLIC_URL + "../images/employee-directory.png"
                }
                alt="Third slide"
              />

              <Carousel.Caption>
                {/* <h3>Employee Directory</h3> */}
                <Link to="https://sarahbinaz1020.github.io/employee-directory/">
                  <p>Deployed App</p>
                </Link>
                <Link to="https://github.com/sarahbinaz1020/employee-directory">
                  <p>Code</p>
                </Link>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col><Col></Col>
      </Row>
    </Container>
  );
}

export default PortfolioCard;
