import { useState, useEffect } from "react";
import "../styles/About.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
//TODO: add modal: https://react-bootstrap.github.io/components/modal/
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
// import {
//   FaHtml5,
//   FaCss3,
//   FaJs,
//   FaNodeJs,
//   FaReact,
//   FaNpm,
// } from "react-icons/fa";
// import { DiMongodb } from "react-icons/di";
// import { GrMysql } from "react-icons/gr";
// import { SiGraphql } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import ProfilePicture from "../../src/pictures/me.jpg";

function About() {
  const [name, setName] = useState("Nick");
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    const names = ["Nick", "Tozzi", "Seitan"];
    let index = 1;

    const intervalId = setInterval(() => {
      setName(names[index]);
      index = (index + 1) % names.length;
    }, 3_000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <Row className="row about-container">
      <Col sm={5} className="left-col">
        <img className="ProfilePicture" alt="its me" src={ProfilePicture} />
      </Col>

      <Col sm={7} className="right-col">
        <h1
          className=" about-pane-right code
          "
        >
          Hey, I'm {name}
        </h1>
        <p className="code">
          Hi there! I'm a passionate developer who loves coding, logic, and
          exploring the exciting world of blockchain technologies.
        </p>
        <p className="code">
          I'm a firm believer in the power of self-improvement, and I'm always
          looking for ways to better myself both personally and professionally.
          Whether it's learning a new coding language or picking up a new
          martial arts technique, I'm always up for a challenge.
        </p>
        <p className="code">
          So if you're looking for a dedicated and passionate developer who's
          not afraid to step outside their comfort zone, then look no further.
          Let's work together to create something truly amazing!
        </p>

        <Button className="modal-button" onClick={() => setShowModal(true)}>
          Hire Me
        </Button>

        {/* <div className="tech-container">
          <FaHtml5 className="tech" />
          <FaCss3 className="tech" />
          <FaJs className="tech" />
          <FaNodeJs className="tech" />
          <FaReact className="tech" />
          <FaNpm className="tech" />
          <DiMongodb className="tech" />
          <GrMysql className="tech" />
          <SiGraphql className="tech" />
        </div> */}
        <div className="social-container">
          <a href="https://twitter.com/SeitanETH">
            <FaTwitter className="icon" />
          </a>
          <a href="https://twitter.com/SeitanETH">
            <FaLinkedin className="icon" />
          </a>
          <a href="https://twitter.com/SeitanETH">
            <FaGithub className="icon" />
          </a>
        </div>
//TODO: This
        <Modal  show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Contact Me</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() => console.log("Send email!")}
            >
              Send Email
            </Button>
          </Modal.Footer>
        </Modal>
      </Col>
    </Row>
  );
}

export default About;
