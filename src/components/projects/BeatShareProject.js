import React from 'react'; 
import Radium from 'radium';
import { Container, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import pokemon from '../../assets/images/dj_logo.jpg'


import htmlLogo from '../../assets/images/html.png';
import cssLogo from '../../assets/images/css.png';
import visualStudio from '../../assets/images/visualstudiocode.png';
import apiLogo from '../../assets/images/api-icon.png';

import androidLogo from '../../assets/images/android_logo.jpg';
import angularLogo from '../../assets/images/angular_logo.png';

import nodeLogo from '../../assets/images/nodejs.png';
import postmanLogo from '../../assets/images/postman.png';
import pythonLogo from'../../assets/images/python_logo.png';
import radiumLogo from '../../assets/images/radium.png';
import reactLogo from '../../assets/images/react.png';
import sqlLogo from '../../assets/images/sql_logo.jpg';
import visualStudioLogo from '../../assets/images/visualstudiocode.png';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();



const styles = {
        container: {
                backgroundColor: "white",
                padding: "4em",
                boxShadow: "2px 2px 10px #000000"
        },
        spacertop : {
                height : "6em"
        },
        spacer : {
                height : "1.5em"
        },
        img : {
                marginTop: "45%",
                height: "auto",
                width: "70%",
                
        },
        header : {
                textAlign: "center",
                textDecoration: "underline"
        },
        button : {
                backgroundColor: "black",
                margin: "auto",
                width: "80%",
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
                width : "28em",
                height: ".5px",
                background: "#333",
                backgroundImage: "linear-gradient(to right, #ccc, #333, #ccc)"
        },
        toolsHeader: {
                textDecoration: "underline",
                textDecorationColor: "#008558",
                fontSize: "2em",
        },
        link:{
                color: "white"
        }
        

}



class ProjectsPage extends React.Component{
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

        
        
        render (){

        return(
        <Container style={styles.container}>
                <Row>
                        <Col xl = "4">
                                
                                <img img src={pokemon} style = {styles.img}></img>
        
                        </Col>

                        <Col xl = "1">
                        </Col>


                        <Col xl = "7">


                                <Row><h3 style = {styles.titleText}>Beat Share</h3></Row>

                                <Row><hr style = {styles.line}></hr></Row>

                                <Row>
                                        <div style = {styles.spacer}></div>
                                </Row>
                                
                                <Row><p>This is a project that I am very proud of because it is one of the most advanced websites I have developed so far. Beat Share is a fully functioning social media website built using React and Node.Js which allows users to share, discuss, and discover electronic music. Beat Share includes a comment system, embedded youtube players, the ability to view top like posts based on various period of time, and much more. This project really helped me understand how incredibly powerful React is. One of my favorite aspects of React is the modularity and reusability of components when they are planned properly. When I developed Beat Share I planned it so that I could reuse many of the same base components over and over again in different contexts. This resulted in my code being incredibly efficient and allowed me to build a very complex application in a shorter period of time. Developing the backend for this project with Node was incredibly interesting for me because it allowed me to create a website with more functionality than anything I have ever developed before. </p></Row>

                                <Row>
                                        <div style = {styles.spacer}></div>
                                </Row>

                                <Row>
                                        <Col xl = "6">
                                        <Button style = {styles.button} onClick={this.toggle}>View Project</Button>
                                        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                                        <ModalHeader toggle={this.toggle}>Please Note!</ModalHeader>
                                        <ModalBody><p>The server which hosts the database for this project will go to sleep when not in use. This means that the first time you open the website and make a request it will take some time to respond. Please be patient while to the database wakes up to see the websites full functionality</p></ModalBody>
                                        <ModalFooter>
                                        <Button style={styles.button}><a href = "https://blue-final-project-client.herokuapp.com/" target = "_blank" style = {styles.link}>Continue to Project</a></Button>
                                        <Button color="danger" onClick={this.toggle}>Cancel</Button>

                                        </ModalFooter>
                                        </Modal>
                                        
                                        
                                        
                                        
                                        
                                        </Col>



                                        
                                        <Col xl = "6"><Button style={styles.button}><a href = "https://github.com/jamesdoraiii/jsLibrary/tree/master/blue-final-project" target = "_blank" style = {styles.link}>View Github Repo</a></Button></Col>
                                </Row>

                                <Row>
                                        <div style = {styles.spacer}></div>
                                </Row>

                                <Row>
                                        <Col><h5 style = {styles.toolsHeader}>Tools Used:</h5></Col>
                                </Row>

                                <Row>
                                        <div style = {styles.spacer}></div>
                                </Row>

                                <Row>
                                        <Col sm = "3"><img img src={htmlLogo} style = {styles.logo} data-aos="flip-right" data-aos-duration="900" data-aos-delay="0"></img></Col>
                                        <Col sm = "3"><img img src={cssLogo} style = {styles.logo} data-aos="flip-right" data-aos-duration="900" data-aos-delay="200"></img></Col>
                                        <Col sm = "3"><img img src={reactLogo} style = {styles.logo} data-aos="flip-right" data-aos-duration="900" data-aos-delay="400"></img></Col>
                                        <Col sm = "3"><img img src={nodeLogo} style = {styles.logo} data-aos="flip-right" data-aos-duration="900" data-aos-delay="600"></img></Col>
                                </Row>

                                <Row>
                                        <div style = {styles.spacer}></div>
                                </Row>

                        </Col>


                </Row>

        </Container>
        )}
}
export default Radium(ProjectsPage);