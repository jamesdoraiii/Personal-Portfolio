import React from "react";
import Radium from "radium";
import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";

import pokemon from "../../assets/images/dj_logo.jpg";

import htmlLogo from "../../assets/images/html.png";
import cssLogo from "../../assets/images/css.png";
import visualStudio from "../../assets/images/visualstudiocode.png";
import apiLogo from "../../assets/images/api-icon.png";

import androidLogo from "../../assets/images/android_logo.jpg";
import angularLogo from "../../assets/images/angular_logo.png";

import nodeLogo from "../../assets/images/nodejs.png";
import postmanLogo from "../../assets/images/postman.png";
import pythonLogo from "../../assets/images/python_logo.png";
import radiumLogo from "../../assets/images/radium.png";
import reactLogo from "../../assets/images/react.png";
import sqlLogo from "../../assets/images/sql_logo.jpg";
import visualStudioLogo from "../../assets/images/visualstudiocode.png";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const styles = {
  container: {
    backgroundColor: "white",
    padding: "4em",
    boxShadow: "2px 2px 10px #000000"
  },
  spacertop: {
    height: "6em"
  },
  spacer: {
    height: "1.5em"
  },
  img: {
    marginTop: "45%",
    height: "auto",
    width: "70%"
  },
  carImg: {
    marginTop: "65%",
    height: "auto",
    width: "80%"
  },
  header: {
    textAlign: "center",
    textDecoration: "underline"
  },
  button: {
    backgroundColor: "black",
    margin: "auto",
    width: "80%"
  },
  logo: {
    height: "auto",
    width: "6em",
    margin: "auto"
  },
  titleText: {
    textAlign: "center",
    width: "100%"
  },
  line: {
    width: "28em",
    height: ".5px",
    background: "#333",
    backgroundImage: "linear-gradient(to right, #ccc, #333, #ccc)"
  },
  toolsHeader: {
    textDecoration: "underline",
    textDecorationColor: "#008558",
    fontSize: "2em"
  },
  link: {
    color: "white"
  }
};

class ProjectsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <Container style={styles.container}>
        <Row>
          <Col xl="4">
            <img
              img
              src={
                "https://i.pinimg.com/originals/f7/57/38/f7573819ae5a015be2ac998c3335a87b.png"
              }
              style={styles.carImg}
            />
          </Col>

          <Col xl="1" />

          <Col xl="7">
            <Row>
              <h3 style={styles.titleText}>Wash Me</h3>
            </Row>

            <Row>
              <hr style={styles.line} />
            </Row>

            <Row>
              <div style={styles.spacer} />
            </Row>

            <Row>
              <p>
                Wash Me is an entrepreneurial idea that I have been wanting to
                work on for for a while and decided to complete as my capstone
                project for Eleven Fifty. Wash Me is a peer to peer automotive
                detailing application created with the intent of making it
                easier for people to connect with hobby automotive detailers in
                order to have their vehicle detailed at a cheaper price, and
                with more flexibility, than going through a professional
                service. This project was the largest project I had taken on to
                date and was completed with a team that included two of my
                fellow classmates from Eleven Fifty. I took on a leadership role
                while completing this project, and handled the wireframing of
                the project, the planning of what components would be necessary,
                the design of how said components would operate, and the
                delegation of tasks to the teammate whos abilities best suited
                said task. I have plans to make Wash Me a hobby project of mine
                and intend to expand upon the idea with a React Native app that
                includes a much greater level of functionality including
                scheduling, payments for services, and more.
              </p>
            </Row>

            <Row>
              <div style={styles.spacer} />
            </Row>

            <Row>
              <Col xl="6">
                <Button style={styles.button} onClick={this.toggle}>
                  View Project
                </Button>
                <Modal
                  isOpen={this.state.modal}
                  toggle={this.toggle}
                  className={this.props.className}
                >
                  <ModalHeader toggle={this.toggle}>Please Note!</ModalHeader>
                  <ModalBody>
                    <p>
                      The server which hosts the database for this project will
                      go to sleep when not in use. This means that the first
                      time you open the website and make a request it will take
                      some time to respond. Please be patient while to the
                      database wakes up to see the websites full functionality
                    </p>
                  </ModalBody>
                  <ModalFooter>
                    <Button style={styles.button}>
                      <a
                        href="https://wash-me-client.herokuapp.com/home"
                        target="_blank"
                        style={styles.link}
                      >
                        Continue to Project
                      </a>
                    </Button>
                    <Button color="danger" onClick={this.toggle}>
                      Cancel
                    </Button>
                  </ModalFooter>
                </Modal>
              </Col>

              <Col xl="6">
                <Button style={styles.button}>
                  <a
                    href="https://github.com/jamesdoraiii/Wash-Me-Client"
                    target="_blank"
                    style={styles.link}
                  >
                    View Github Repo
                  </a>
                </Button>
              </Col>
            </Row>

            <Row>
              <div style={styles.spacer} />
            </Row>

            <Row>
              <Col>
                <h5 style={styles.toolsHeader}>Tools Used:</h5>
              </Col>
            </Row>

            <Row>
              <div style={styles.spacer} />
            </Row>

            <Row>
              <Col sm="3">
                <img
                  img
                  src={htmlLogo}
                  style={styles.logo}
                  data-aos="flip-right"
                  data-aos-duration="900"
                  data-aos-delay="0"
                />
              </Col>
              <Col sm="3">
                <img
                  img
                  src={cssLogo}
                  style={styles.logo}
                  data-aos="flip-right"
                  data-aos-duration="900"
                  data-aos-delay="200"
                />
              </Col>
              <Col sm="3">
                <img
                  img
                  src={angularLogo}
                  style={styles.logo}
                  data-aos="flip-right"
                  data-aos-duration="900"
                  data-aos-delay="400"
                />
              </Col>
              <Col sm="3">
                <img
                  img
                  src={nodeLogo}
                  style={styles.logo}
                  data-aos="flip-right"
                  data-aos-duration="900"
                  data-aos-delay="600"
                />
              </Col>
            </Row>

            <Row>
              <div style={styles.spacer} />
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Radium(ProjectsPage);
