import { useState, useEffect } from "react";
import "../styles/About.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
//TODO: add modal: https://react-bootstrap.github.io/components/modal/
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
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
        <h1 className="about-pane-right code">Hey, I'm {name}</h1>
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
        <Button
          className="modal-button hire-button code"
          onClick={() => setShowModal(true)}
        >
          Hire Me
        </Button>
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

        <Modal
          show={showModal}
          onHide={() => setShowModal(false)}
          dialogClassName="modal-150w"
          centered
        >
          <Modal.Header className="bg-dark text-light" closeButton>
            <Modal.Title>Contact Me</Modal.Title>
          </Modal.Header>
          <Modal.Body className="bg-dark text-light  ">
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  I'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer className="bg-dark text-light">
            <Button className="send-email-button"
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
