import React from "react";
import { Card, Button, CardDeck } from "react-bootstrap";
import "./portfoliocard.css";

function PortfolioCard() {
  return (
    <>
      <CardDeck className="carddeck">
        {/* CARD 1 */}
        <Card
          className="mb-5 mt-5 text-center"
          bg="secondary"
          text="light"
          style={{ width: "18rem" }}
        >
          <Card.Body>
            <Card.Title className="text-center">Bathroom Buddy</Card.Title>
            <Card.Text>
              One of my class projects, this was a fun one that I hope to
              continue after our program is finished. Look up a location to find
              the closest restroom, and see if has good reviews, or add your
              review once you've created an account.
              <Card.Img
                className="mt-2"
                variant="top"
                src={process.env.PUBLIC_URL + "/images/bathroom-buddy.png"}
              />
            </Card.Text>
            <Button
              href="https://bathroom-buddy-v1.herokuapp.com/"
              variant="primary"
            >
              View Site
            </Button>
          </Card.Body>
        </Card>
        {/* CARD 2 */}
        <Card
          className="mb-5 mt-5 text-center"
          bg="secondary"
          text="light"
          style={{ width: "18rem" }}
        >
          <Card.Body>
            <Card.Title>Work Day Scheduler</Card.Title>
            <Card.Text>
              Another class assignment, user can put in tasks for the day with
              an interactive coloring to highlight the future, current, and past
              hours.
              <Card.Img
                className="mt-2"
                variant="top"
                src={
                  process.env.PUBLIC_URL + "./images/work-day-planner-img.png"
                }
              />
            </Card.Text>
            <Button
              href="https://sarahbinaz1020.github.io/Work-Day-Scheduler/"
              variant="primary"
            >
              View Site
            </Button>
          </Card.Body>
        </Card>
        {/* CARD 3 */}
        <Card
          className="mb-5 mt-5 text-center"
          bg="secondary"
          text="light"
          style={{ width: "18rem" }}
        >
          <Card.Body>
            <Card.Title>Note Taker</Card.Title>
            <Card.Text>
              Take notes, save them, come back to your page, and they're still
              there. Will be adding more features to this one so the user has
              more options and styling available, and to delete the note once it
              is finished.
              <Card.Img
                className="mt-2"
                variant="top"
                src={process.env.PUBLIC_URL + "../images/note-taker.png"}
              />
            </Card.Text>
            <Button
              href="https://note-taker-sb.herokuapp.com/"
              variant="primary"
            >
              View Site
            </Button>
          </Card.Body>
        </Card>
      </CardDeck>
      {/* CARD 4 */}
      <CardDeck className="carddeck">
        <Card
          className="mb-5 mt-5 text-center"
          bg="secondary"
          text="light"
          style={{ width: "18rem" }}
        >
          <Card.Body>
            <Card.Title>Weather Dashboard</Card.Title>
            <Card.Text>
              Another class assignment, can't wait to build on this one as well!
              Look up the weather for a city, get current and 5-day forecast.
              Also save and delete your recent searches.
              <Card.Img
                className="mt-2"
                variant="top"
                src={process.env.PUBLIC_URL + "../images/weather-dashboard.png"}
              />
            </Card.Text>
            <Button
              href="https://sarahbinaz1020.github.io/Weather-Dashboard/index.html"
              variant="primary"
            >
              View Site
            </Button>
          </Card.Body>
        </Card>
        {/* CARD 5 */}
        <Card
          className="mb-5 mt-5 text-center"
          bg="secondary"
          text="light"
          style={{ width: "18rem" }}
        >
          <Card.Body>
            <Card.Title>Fitness Tracker</Card.Title>
            <Card.Text>
              A class assignment building out the backend server to create and
              save workouts to your dashboard. A good exerccise in using MongoDB
              and working with Schemas.
              <Card.Img
                className="mt-2"
                variant="top"
                src={process.env.PUBLIC_URL + "../images/fitness-tracker.png"}
              />
            </Card.Text>
            <Button
              href="https://fitness-tracker-8.herokuapp.com/"
              variant="primary"
            >
              View Site
            </Button>
          </Card.Body>
        </Card>
        {/* CARD 6 */}
        <Card
          className="mb-5 mt-5 text-center"
          bg="secondary"
          text="light"
          style={{ width: "18rem" }}
        >
          <Card.Body>
            <Card.Title>Employee Directory</Card.Title>
            <Card.Text>
              A class assignment using React to build out a database into a table that can sort and filter your results.
              <Card.Img
                className="mt-2"
                variant="top"
                src={process.env.PUBLIC_URL + "../images/employee-directory.png"}
              />
            </Card.Text>
            <Button
              href="https://sarahbinaz1020.github.io/employee-directory/"
              variant="primary"
            >
              View Site
            </Button>
          </Card.Body>
        </Card>
      </CardDeck>
    </>
  );
}

export default PortfolioCard;
