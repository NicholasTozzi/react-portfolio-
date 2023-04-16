import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import "../styles/Resume.css";
import PortfolioPiece1 from "../../src/pictures/portfolio-pieces/flick-tracker.png";
import PortfolioPiece2 from "../../src/pictures/portfolio-pieces/game-wiki.png";
import { FaHtml5, FaCss3, FaJs, FaNodeJs } from "react-icons/fa";
import { SiNpm, SiMongodb, SiMysql, SiGraphql } from "react-icons/si";
import { DiReact } from "react-icons/di";
import { useState, useRef, useEffect } from "react";

function Resume() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  const icons = [
    <FaHtml5 className="tech-icon" />,
    <FaCss3 className="tech-icon" />,
    <FaJs className="tech-icon" />,
    <FaNodeJs className="tech-icon" />,
    <SiMongodb className="tech-icon" />,
    <SiNpm className="tech-icon" />,
    <SiMysql className="tech-icon" />,
    <SiGraphql className="tech-icon" />,
    <DiReact className="tech-icon" />,
  ];

  useEffect(() => {
    const animateCarousel = () => {
      const nextIndex = index === icons.length - 1 ? 0 : index + 1;
      setIndex(nextIndex);
    };
    intervalRef.current = setInterval(() => {
      animateCarousel();
    }, 3000);
    return () => clearInterval(intervalRef.current);
  }, [index]);

  const handleSelect = (selectedIndex) => {
    clearInterval(intervalRef.current);
    setIndex(selectedIndex);
  };

  return (
    <div className="section row" id="portfolio">
      <div className="col col-md-5 col1">
        <h1 className="code"> Check Out </h1>
        <h1 className="code green-text">this.project</h1>
        <h2 className="code">built with </h2>
        <div className="tech">
          <Carousel
            className="tech-container"
            activeIndex={index}
            onSelect={handleSelect}
            interval={null}
            indicators={false}
            controls={false}
            wrap={false}
          >
            {icons.map((icon, idx) => (
              <Carousel.Item key={idx}>{icon}</Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
      <div className="col col-md-7">
        <Carousel className="resume" indicators={false}>
          <Carousel.Item>
            <a href="https://flick-tracker.herokuapp.com/">
              <img
                className="d-block w-100 portfolio"
                src={PortfolioPiece1}
                alt="Flick Tracker"
              />
            </a>
            <Carousel.Caption className="portfolio-piece-context">
              <h3 className="code portfolio-piece-title">Flick Tracker</h3>

              <p className="code portfolio-piece-caption">
                A MERN Movie App to track watched movies and your watchlist
              </p>
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

            <Carousel.Caption className="portfolio-piece-context">
              <h3 className="code portfolio-piece-title">E-Commerce</h3>
              <p className="code portfolio-piece-caption">
                A mySQL backend appplication for an ecommerce website.
              </p>
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

            <Carousel.Caption className="portfolio-piece-context">
              <h3 className="code portfolio-piece-title">Game Wiki</h3>
              <p className="code portfolio-piece-caption">
                An application to find video games based on catagory.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Resume;
