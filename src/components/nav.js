import Container from "react-bootstrap/Container";
import "../styles/nav.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Navigation() {
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="text-light">
          Nicholas Tozzi
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto jc-flex-end">
            <Nav.Link href="#home" className="text-light">
              About
            </Nav.Link>
            <Nav.Link href="#link" className="text-light">
              Portfolio
            </Nav.Link>
            <Nav.Link href="#link" className="text-light">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
