import { useState } from "react";
import Container from "react-bootstrap/Container";
import "../styles/Nav.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Navigation() {
  const [showModal, setShowModal] = useState(false);

  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="nav-title text-light me-auto">
          Nicholas Tozzi
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-items">
            <Nav.Link href="#about" className="text-light nav-link">
              About
            </Nav.Link>
            <Nav.Link href="#portfolio" className="text-light nav-link">
              Portfolio
            </Nav.Link>
            <Nav.Link
              className="text-light nav-link"
              onClick={() => setShowModal(true)}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>

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
          <Button
            className="send-email-button"
            variant="primary"
            onClick={() => console.log("Send email!")}
          >
            Send Email
          </Button>
        </Modal.Footer>
      </Modal>
    </Navbar>
  );
}

export default Navigation;
