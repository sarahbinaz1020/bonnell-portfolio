import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./portfoliocard.css";

function PortfolioCard() {
  return (
    <Container>
      <Row>
        <Col>
          <img
            src={process.env.PUBLIC_URL + "/images/portfolio-black.png"}
            className="portfolio-title figure-img img-fluid rounded mx-auto d-block"
            alt="..."
          />
        </Col>
      </Row>
      <Row className="mt-5 mb-5">
        <Col>
          {/* Card 1 - Bathroom Buddy */}
          <Card className="wholecard" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={process.env.PUBLIC_URL + "/images/bathroom-buddy.png"}
            />
            <Card.Body>
              <Card.Title>Bathroom Buddy</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <div className="d-grid gap-2">
                <Button
                  className=""
                  variant="primary"
                  href="https://bathroom-buddy-v1.herokuapp.com/"
                >
                  Deployed Site
                </Button>
                <Button
                  className=""
                  variant="primary"
                  href="https://github.com/bhfreeman/restroom-tracker"
                >
                  Code
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          {/* Card 2 - Workday Scheduler */}
          <Card className="wholecard" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={process.env.PUBLIC_URL + "./images/work-day-planner-img.png"}
            />
            <Card.Body>
              <Card.Title>Work Day Scheduler</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <div className="d-grid gap-2">
              <Button
                variant="primary"
                href="https://sarahbinaz1020.github.io/Work-Day-Scheduler/"
              >
                Deployed Site
              </Button>
              <Button
                variant="primary"
                href="https://github.com/sarahbinaz1020/Work-Day-Scheduler"
              >
                Code
              </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
        {/* Card 3 - Employee Directory */}
        <Card className="wholecard" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={process.env.PUBLIC_URL + "../images/employee-directory.png"}
            />
            <Card.Body>
              <Card.Title>Employee Directory</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <div className="d-grid gap-2">
              <Button
                variant="primary"
                href="https://sarahbinaz1020.github.io/employee-directory/"
              >
                Deployed Site
              </Button>
              <Button
                variant="primary"
                href="https://github.com/sarahbinaz1020/employee-directory"
              >
                Code
              </Button>
              </div>
            </Card.Body>
          </Card>          
        </Col>
      </Row>
      <Row className="mb-5">
        <Col>
          {/* Card 4 - Weather Dashboard */}
          <Card className="wholecard" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={process.env.PUBLIC_URL + "../images/weather-dashboard.png"}
            />
            <Card.Body>
              <Card.Title>Weather Dashboard</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <div className="d-grid gap-2">
              <Button
                variant="primary"
                href="https://sarahbinaz1020.github.io/Weather-Dashboard/index.html"
              >
                Deployed Site
              </Button>
              <Button
                variant="primary"
                href="https://github.com/sarahbinaz1020/Weather-Dashboard"
              >
                Code
              </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          {/* Card 5 - Fitness Tracker */}
          <Card className="wholecard" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={process.env.PUBLIC_URL + "../images/fitness-tracker.png"}
            />
            <Card.Body>
              <Card.Title>Fitness Tracker</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <div className="d-grid gap-2">
              <Button
                variant="primary"
                href="https://fitness-tracker-8.herokuapp.com/"
              >
                Deployed Site
              </Button>
              <Button
                variant="primary"
                href="https://github.com/sarahbinaz1020/fitness-tracker"
              >
                Code
              </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          {/* Card 6 - Note Taker */}
          <Card className="wholecard" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={process.env.PUBLIC_URL + "../images/note-taker.png"}
            />
            <Card.Body>
              <Card.Title>Note Taker</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <div className="d-grid gap-2">
              <Button
                variant="primary"
                href="https://note-taker-sb.herokuapp.com/"
              >
                Deployed Site
              </Button>
              <Button
                variant="primary"
                href="https://github.com/sarahbinaz1020/note-taker"
              >
                Code
              </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default PortfolioCard;
