import React from "react";
import { Container } from "react-bootstrap";
import { HashRouter as Router, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Portfolio from "./components/Portfolio/PortfolioCard"
import Contact from "./pages/Contact/Contact";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer/Footer";
import "./app.css"
import NavBar from "./components/NavBar/Navbar";

function App() {
  return (
    <Router>
      <NavBar/>
      <div className="carddeckbg">
        
        <Container className="backgroundtext d-flex justify-content-center">
       
          <Wrapper>
            <Route exact path="/" component={Dashboard} />
            <Route path="/Portfolio" component={Portfolio} />
            <Route path="/Contact" component={Contact} />
          </Wrapper>
        </Container>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
