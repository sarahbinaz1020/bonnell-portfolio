import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./portfoliocard.css";

function PortfolioCard() {
  return (
    <Container className="" fluid>
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
          <Card className="wholecard mx-auto" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={process.env.PUBLIC_URL + "/images/bathroom-buddy.png"}
            />
            <Card.Body>
              <Card.Title className="cardtitle">Bathroom Buddy</Card.Title>
              <Card.Text className="cardtext lh-base text-justify">
                <em> Find a public restroom wherever you are, and rate your experience.</em>
                <br></br><br></br>
               Tools used:
                <ul>
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>Handlebars</li>
                  <li>MySQL</li>
                  <li>Team-built API</li>
                  <li>CSS</li>
                </ul>
              </Card.Text>
              <div className="d-grid gap-2">
                <Button
                  className=""
                  variant="primary"
                  href="https://bathroom-buddy-v1.herokuapp.com/"
                  target="_blank"
                >
                  Deployed Site
                </Button>
                <Button
                  className=""
                  variant="primary"
                  href="https://github.com/bhfreeman/restroom-tracker"
                  target="_blank"
                >
                  Code
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          {/* Card 2 - Weather Dashboard */}
          <Card className="wholecard mx-auto" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={process.env.PUBLIC_URL + "/images/weather-dashboard.png"}
            />
            <Card.Body>
              <Card.Title className="cardtitle">Weather Dashboard</Card.Title>
              <Card.Text className="cardtext">
              <em> Find the weather for a particular city, save and delete your recent searches.</em>
                <br></br><br></br>
                Tools used:
                <ul>
                  <li>JavaScript</li>
                  <li>Open Weather API</li>
                  <li>localStorage</li>
                  <li>CSS</li>
                </ul>
              </Card.Text>
              <div className="d-grid gap-2">
                <Button
                  variant="primary"
                  href="https://sarahbinaz1020.github.io/Weather-Dashboard/index.html"
                  target="_blank"
                >
                  Deployed Site
                </Button>
                <Button
                  variant="primary"
                  href="https://github.com/sarahbinaz1020/Weather-Dashboard"
                  target="_blank"
                >
                  Code
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          {/* Card 3 - Employee Directory */}
          <Card className="wholecard mx-auto" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={process.env.PUBLIC_URL + "/images/employee-directory.png"}
            />
            <Card.Body>
              <Card.Title className="cardtitle">Employee Directory</Card.Title>
              <Card.Text className="cardtext">
              <em> Search for an employee within your company, sort and filter by different variables.</em>
                <br></br><br></br>
                Tools used:
                <ul>
                  <li>React</li>
                  <li>Random User API</li>
                  <li>Bootstrap</li>
                  <li>CSS</li>
                </ul>
              </Card.Text>
              <div className="d-grid gap-2">
                <Button
                  variant="primary"
                  href="https://sarahbinaz1020.github.io/employee-directory/"
                  target="_blank"
                >
                  Deployed Site
                </Button>
                <Button
                  variant="primary"
                  href="https://github.com/sarahbinaz1020/employee-directory"
                  target="_blank"
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
          {/* Card 4 - Workday Scheduler */}
          <Card className="wholecard mx-auto" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={process.env.PUBLIC_URL + "/images/work-day-planner-img.png"}
            />
            <Card.Body>
              <Card.Title className="cardtitle">Work Day Scheduler</Card.Title>
              <Card.Text className="cardtext">
              <em> Organize your day with this digital planner, quickly view past/current/future tasks by color coded hours.</em>
                <br></br><br></br>
                Tools used:
                <ul>
                  <li>JavaScript</li>
                  <li>jQuery</li>
                  <li>localStorage</li>
                  <li>CSS</li>
                </ul>
              </Card.Text>
              <div className="d-grid gap-2">
                <Button
                  variant="primary"
                  href="https://sarahbinaz1020.github.io/Work-Day-Scheduler/"
                  target="_blank"
                >
                  Deployed Site
                </Button>
                <Button
                  variant="primary"
                  href="https://github.com/sarahbinaz1020/Work-Day-Scheduler"
                  target="_blank"
                >
                  Code
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          {/* Card 5 - Fitness Tracker */}
          <Card className="wholecard mx-auto" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={process.env.PUBLIC_URL + "/images/fitness-tracker.png"}
            />
            <Card.Body>
              <Card.Title className="cardtitle">Fitness Tracker</Card.Title>
              <Card.Text className="cardtext">
              <em> Add and edit your workouts, view your workouts by days and weights used.</em>
                <br></br><br></br>
                Tools used:
                <ul>
                  <li>MongoDB</li>
                  <li>Mongoose</li>
                </ul>
              </Card.Text>
              <div className="d-grid gap-2">
                <Button
                  variant="primary"
                  href="https://fitness-tracker-8.herokuapp.com/"
                  target="_blank"
                >
                  Deployed Site
                </Button>
                <Button
                  variant="primary"
                  href="https://github.com/sarahbinaz1020/fitness-tracker"
                  target="_blank"
                >
                  Code
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          {/* Card 6 - Note Taker */}
          <Card className="wholecard mx-auto" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={process.env.PUBLIC_URL + "/images/note-taker.png"}
            />
            <Card.Body>
              <Card.Title className="cardtitle">Note Taker</Card.Title>
              <Card.Text className="cardtext">
              <em> Add and edit your notes on a digital note taker, save your notes for future reference.</em>
                <br></br><br></br>
                Tools used:
                <ul>
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>db-json</li>
                </ul>
              </Card.Text>
              <div className="d-grid gap-2">
                <Button
                  variant="primary"
                  href="https://note-taker-sb.herokuapp.com/"
                  target="_blank"
                >
                  Deployed Site
                </Button>
                <Button
                  variant="primary"
                  href="https://github.com/sarahbinaz1020/note-taker"
                  target="_blank"
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
