import React from "react";
import Radium from "radium";
import RecentProjects from "../recentProjects/RecentProjects";
import picture from "../../assets/images/headshot2.png";
import { Container, Row, Col, Button, Jumbotron } from "reactstrap";
import "./homepage.css";
import background from "../../assets/images/circuitboard2.jpg";
import personalLogo from "../../assets/images/logo_transparent.png";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const styles = {
  wholepage: {
    backgroundColor: "#dbdbdb",
    height: "100%",
    overflowY: "none"
  },
  spacertop: {
    height: "2em"
  },
  spacer: {
    height: "1em"
  },
  line: {
    width: "30em",
    height: ".5px",
    background: "#333",
    backgroundImage: "linear-gradient(to right, #ccc, #333, #ccc)"
  },
  // headshot : {
  //         height: "auto",
  //         margin: "auto",
  //         width: "90%",
  //         boxShadow: "3px 4px 10px #000000",
  //         borderRadius: "50%"
  // },
  maincontent: {
    backgroundColor: "#dbdbdb",
    height: "100%",
    overflowY: "none"
  },
  introduction: {
    backgroundColor: "white",
    padding: "1em",
    fontSize: "1em"
  },
  introductionbutton: {
    backgroundColor: "black",
    margin: "auto"
  },
  jumbotron: {
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white"
  },
  // logo: {
  //         height: "auto",
  //         width: "25%",
  //         margin: "auto",
  //         position: "relative",
  //         bottom: "60%",
  // },
  subtext: {
    fontSize: "1.9em"
  },
  form: {
    margin: "auto"
  },
  paragraph: {
    fontSize: "1.4em",
    textAlign: "center",
    padding: "20px"
  },
  container: {
    backgroundColor: "white",
    padding: "4em",
    boxShadow: "2px 2px 10px #000000"
  }
};

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={styles.wholepage}>
        <div style={styles.spacertop} />

        <Jumbotron style={styles.jumbotron}>
          <img src={personalLogo} style={styles.logo} id="logo" />
          <div style={styles.spacer} />
          <p style={styles.subtext}>
            Junior Developer, Indiana University Alumnus, Eleven Fifty Graduate
          </p>
        </Jumbotron>

        <div style={styles.maincontent}>
          <Container>
            <Row>
              <Col sm="4">
                <div style={styles.spacer} />
                <img
                  src={picture}
                  style={styles.headshot}
                  id="headshot"
                  data-aos="flip-right"
                  data-aos-duration="900"
                />
                <div style={styles.spacer} />
              </Col>

              <Col sm="8">
                <Row>
                  <div style={styles.spacer} />
                </Row>

                <Row>
                  <p style={styles.paragraph}>
                    My name is James Dora, and I am Javascript/Web Developer. I
                    have been developing software since 2014 when I began a
                    degree in Computer Informatics at Indiana University. My
                    growth as a developer continued throughout my undergrad and
                    also through Eleven Fifty's Javascript Development Bootcamp
                    which I completed after graduating from IU. One of my
                    strongest qualities as a developer is that I am a fast
                    learner who has no problems picking up a new skill, hitting
                    the ground running with it, and then implementing it into
                    any project. I think this ability makes me a very flexible
                    developer who is not afraid of new challenges or jumping
                    into new projects.
                  </p>
                </Row>

                <Row>
                  <div style={styles.spacer} />
                </Row>

                {/* <Row>
                                <form action="www.linkedin.com/in/james-dora-2950b3aa" method="get" target="_blank" style = {styles.form}>
                                        <Button style = {styles.introductionbutton} type = "submit">Connect With Me on Linkedin</Button>
                                </form>
                                </Row> */}
              </Col>
            </Row>

            <Row>
              <div style={styles.spacer} />
            </Row>
            <Row>
              <div style={styles.spacer} />
            </Row>
            <Row>
              <div style={styles.spacer} />
            </Row>
            <Row>
              <div style={styles.spacer} />
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
export default Radium(HomePage);
