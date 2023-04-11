import "../styles/About.css";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import ProfilePicture from "../../src/pictures/me.jpg";

function About() {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row className="row">
        <Col sm={3}>
          <Nav variant="pills" className="flex-column about-nav-container">
            <Nav.Item className="about-pills">
              <Nav.Link eventKey="first">About Me</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link className="about-pills" eventKey="second">
                Future
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane className="wahoo" eventKey="first">
              <h1
                className=" about-pane-right
          "
              >
                wahoo wahoo wahoo wahoo wahoo wahoo wahoo wahoo wahoo wahoo
                wahoo wahoo wahoo wahoo wahoo wahoo wahoo wahoo wahoo wahoo
                wahoo wahoo wahoo wahoo wahoo wahoo wahoo wahoo wahoo wahoo
                wahoo wahoo wahoo wahoo wahoo wahoo wahoo wahoo wahoo wahoo
                wahoo wahoo wahoo wahoo wahoo wahoo wahoo wahoo wahoo wahoo
                wahoo wahoo wahoo wahoo
              </h1>
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
              <img
                className="ProfilePicture"
                alt="its me"
                src={ProfilePicture}
              />
            </Tab.Pane>

            <Tab.Pane eventKey="second">
              <h1>yeehaw</h1>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default About;
