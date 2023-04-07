import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
//TODO: Make nav go to different components of the webpage
function Resume() {
  return (
    <Carousel>
      <Carousel.Item>
        <a href="https://github.com/NicholasTozzi/Social-Network-API">
          <img
            className="d-block w-100"
            src="https://kinsta.com/wp-content/uploads/2022/05/what-is-mongodb.jpg"
            alt="Social Media API"
          />
        </a>
        <Carousel.Caption>
          <h3>Social Media API</h3>
          <img src="/public/github.png" />
          <p>A backend Social Media API created with mongoDB.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Resume;
