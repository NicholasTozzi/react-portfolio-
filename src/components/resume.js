import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
//TODO: Make nav go to different components of the webpage
function Resume() {
  return (
    <Carousel>
      <Carousel.Item>
        <a href="https://flick-tracker.herokuapp.com/">
          <img
            className="d-block w-100"
            src="https://www.gannett-cdn.com/-mm-/eb34b9888702cb3f4641b6ee49362a859a5dfd45/c=0-0-2309-1299/local/-/media/2020/04/29/USATODAY/usatsports/movie-theater-gettyimages-530640869.jpg?width=2309&height=1299&fit=crop&format=pjpg&auto=webp"
            alt="Flick Tracker"
          />
        </a>
        <Carousel.Caption>
          <h3>Flick Tracker</h3>
          <img src="/public/github.png" />
          <p>A MERN Movie App to track watched movies and your watchlist</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <a href="https://github.com/NicholasTozzi/e-commerce">
          <img
            className="d-block w-100"
            src="https://e0.pxfuel.com/wallpapers/850/829/desktop-wallpaper-e-commerce-web-designing-development-company-e-commerce.jpg"
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
            className="d-block w-100"
            src="https://kinsta.com/wp-content/uploads/2022/05/what-is-mongodb.jpg"
            alt="Game Wiki"
          />
        </a>

        <Carousel.Caption>
          <h3>Game Wiki</h3>
          <p>An application to find video games based on catagory.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Resume;
