import React from 'react'; 
import Radium from 'radium';
import { Container, Row, Col, Button } from 'reactstrap';

import pokemon from '../../assets/images/portfolioLogo.png'


import htmlLogo from '../../assets/images/html.png';
import cssLogo from '../../assets/images/css.png';
import visualStudio from '../../assets/images/visualstudiocode.png';
import apiLogo from '../../assets/images/api-icon.png';

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


                                <Row><h3 style = {styles.titleText}>Portfolio V1</h3></Row>

                                <Row><hr style = {styles.line}></hr></Row>

                                <Row>
                                        <div style = {styles.spacer}></div>
                                </Row>
                                
                                <Row><p>This was one of the early websites I developed during my time at Eleven Fifty. It is a portfolio developed with HTML and CSS. I have since replaced this portfolio with the portfolio you are viewing this project on now. I ended up replacing my original portfolio because I wanted my portfolio to be simpler, more professional, and responsive. I also wanted the opportunity to practice building websites with React which is what my current portfolio was developed with. I like to keep this portfolio listed under my projects because I believe it helps to show how much I have grown as a developer in a very short period of time. </p></Row>

                                <Row>
                                        <div style = {styles.spacer}></div>
                                </Row>

                                <Row>
                                        <Col xl = "6"><Button style={styles.button}><a href = "https://jamesdoraiii.github.io/" target = "_blank" style = {styles.link}>View Project</a></Button></Col>
                                        <Col xl = "6"><Button style={styles.button}><a href = "https://github.com/jamesdoraiii/jamesdoraiii.github.io" target = "_blank" style = {styles.link}>View Github Repo</a></Button></Col>
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
                                        <Col sm = "4"><img img src={htmlLogo} style = {styles.logo} data-aos="flip-right" data-aos-duration="900" data-aos-delay="0"></img></Col>
                                        <Col sm = "4"><img img src={cssLogo} style = {styles.logo} data-aos="flip-right" data-aos-duration="900" data-aos-delay="200"></img></Col>
                                        <Col sm = "4"><img img src={visualStudio} style = {styles.logo} data-aos="flip-right" data-aos-duration="900" data-aos-delay="400"></img></Col>
                                        
                                </Row>

                        </Col>


                </Row>

        </Container>
        )}
}
export default Radium(ProjectsPage);