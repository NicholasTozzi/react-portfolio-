import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import "../styles/Resume.css";
import PortfolioPiece1 from "../../src/pictures/portfolio-pieces/flick-tracker.png";
import PortfolioPiece2 from "../../src/pictures/portfolio-pieces/game-wiki.png";

function Resume() {
  return (
    <div className="section row">
      <div className="col col-md-5">
        <h1 className="code"> <p className="this">this</p>.project</h1>
        <h2>was built with</h2>
        //TODO Create a state variable array to display icons of all tech skills you know
      
        
        
       
      </div>

      <div className="col col-md-7">
        <Carousel className="resume">
          <Carousel.Item>
            <a href="https://flick-tracker.herokuapp.com/">
              <img
                className="d-block w-100 portfolio"
                src={PortfolioPiece1}
                alt="Flick Tracker"
              />
            </a>
            <Carousel.Caption className="caption-container">
              <h3>Flick Tracker</h3>
              <img src="{PortfolioPiece1}" />
              <p>A MERN Movie App to track watched movies and your watchlist</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <a href="https://github.com/NicholasTozzi/e-commerce">
              <img
                className="d-block w-100 portfolio"
                src={PortfolioPiece1}
                alt="e-commerce"
              />
            </a>

            <Carousel.Caption>
              <h3>E-Commerce BackEnd Application</h3>
              <p>A mySQL backend appplication for an ecommerce website.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <a href="https://alexbrenes999.github.io/project1/">
              <img
                className="d-block w-100 portfolio"
                src={PortfolioPiece2}
                alt="Game Wiki"
              />
            </a>

            <Carousel.Caption>
              <h3>Game Wiki</h3>
              <p>An application to find video games based on catagory.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Resume;
