import { useState, useEffect, useRef } from "react";
import "../styles/About.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import emailjs from "@emailjs/browser";
import Alert from "react-bootstrap/Alert";

import ProfilePicture from "../../src/pictures/me.jpg";

function About() {
  const form = useRef();
  const [name, setName] = useState("Nick");
  const [showModal, setShowModal] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleAlertClose = () => {
    setShowAlert(false);
    setShowSuccessAlert(false);
  };

  const handleEmail = (e) => {
    e.preventDefault();
    console.log(e);
    emailjs
      .sendForm(
        "service_lh1bc5b",
        "template_vn47gcq",
        form.current,
        "htcHqFhj78Zy2RcTK"
      )
      .then(
        (result) => {
          console.log(result.text);
          setShowSuccessAlert(true);
          setShowAlert(true);
          setTimeout(() => {
            setShowAlert(false);
          }, 5000);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setShowModal(false);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  useEffect(() => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  }, []);

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
    <Row className="row about-container" id="about">
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
            <Form ref={form}>
              <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  name="user_name"
                  type="name"
                  placeholder="Enter name"
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                {" "}
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  name="user_email"
                  type="email"
                  placeholder="Enter email"
                />
                <Form.Text className="text-muted">
                  I'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control name="message" as="textarea" rows={3} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer className="bg-dark text-light">
            <Button className="send-email-button" onClick={handleEmail}>
              Send Email
            </Button>
          </Modal.Footer>
        </Modal>
        {showSuccessAlert && (
          <Alert
            variant="success"
            onClose={handleAlertClose}
            dismissible
            className="my-alert"
          >
            <Alert.Heading>Success!</Alert.Heading>
            <p className="alert-text">
              Your message has been sent successfully.
            </p>
          </Alert>
        )}
      </Col>
    </Row>
  );
}

export default About;
