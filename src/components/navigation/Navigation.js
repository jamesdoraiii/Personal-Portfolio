import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Radium from "radium";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
} from "reactstrap";

import HomePage from "../homePage/HomePage";
import ProjectsPage from "../projectsPage/ProjectsPage";
import AboutPage from "../aboutPage/AboutPage";
import ContactPage from "../contactPage/ContactPage";
import ResumePage from "../resumePage/ResumePage";

const styles = {
  navbar: {
    background: "#008558",
    height: "4em",
    boxShadow: "0px 2px 9px #000000"
  },
  navbartext: {
    color: "white",
    fontSize: "1.5em",
    margin: ".7em"
  },
  navartext2: {
    color: "white",
    fontSize: "1.5em",
    margin: "auto"
  },
  nav: {
    margin: "auto"
  },
  collapse: {
    background: "#008558"
  }
};

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar light expand="md" fixed="top" id="navbar" style={styles.navbar}>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar style={styles.collapse}>
            <Nav style={styles.nav} className="ml-auto" navbar>
              <NavItem>
                <NavLink>
                  <Link to="/" style={styles.navbartext}>
                    Home
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link to="/projects" style={styles.navbartext}>
                    Projects
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link to="/aboutme" style={styles.navbartext}>
                    About
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link to="/contact" style={styles.navbartext}>
                    Contact
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <a
                    href="https://drive.google.com/file/d/18RlVgFBVgReLxQgDDPQOiTXc95zeio65/view?usp=sharing"
                    target="_blank"
                    style={styles.navbartext}
                  >
                    Resume
                  </a>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <a
                    href="https://www.linkedin.com/in/james-dora-2950b3aa"
                    style={styles.navbartext}
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <a
                    href="https://github.com/jamesdoraiii"
                    style={styles.navbartext}
                    target="_blank"
                  >
                    Github
                  </a>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

        <div className="sidebar-route">
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>

            <Route exact path="/projects">
              <ProjectsPage />
            </Route>

            <Route exact path="/aboutme">
              <AboutPage />
            </Route>

            <Route exact path="/contact">
              <ContactPage />
            </Route>

            <Route exact path="/resume">
              <ResumePage />
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}
export default Radium(Navigation);
