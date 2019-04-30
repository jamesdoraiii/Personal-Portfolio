import React from 'react'; 
import Radium from 'radium';
import {Jumbotron, Col, Row, Container} from 'reactstrap';
import background from '../../assets/images/circuitboard2.jpg';
import iuLogo from '../../assets/images/IU_Logo.jpg';
import elevenFiftyLogo from '../../assets/images/elevenfiftyLogo.png';


import androidLogo from '../../assets/images/android_logo.jpg';
import angularLogo from '../../assets/images/angular_logo.png';
import apiLogo from '../../assets/images/api-icon.png';
import cssLogo from '../../assets/images/css.png';
import htmlLogo from '../../assets/images/html.png';
import nodeLogo from '../../assets/images/nodejs.png';
import postmanLogo from '../../assets/images/postman.png';
import pythonLogo from'../../assets/images/python_logo.png';
import radiumLogo from '../../assets/images/radium.png';
import reactLogo from '../../assets/images/react.png';
import sqlLogo from '../../assets/images/sql_logo.jpg';
import visualStudioLogo from '../../assets/images/visualstudiocode.png';



const styles = {
        wholepage: {
                backgroundColor: "#dbdbdb",
                height: "100%"
        },
        spacertop : {
                height : "4em"
        },
        spacer : {
                height : "2em"
        },
        jumbotron: {
                backgroundImage: `url(${background})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: 'white',
        },
        jumbotronText: {
                fontSize: "3.5em"
        },
        line: {
                width : "auto",
                height: ".5px",
                background: "#333",
                backgroundImage: "linear-gradient(to right, #333, #ccc, #333)"
        },
        titleText: {
                textAlign: "center",
                width: "100%",
                textDecoration: "underline",
                textDecorationColor: "#008558",
                fontSize: "3em",
        },
        img: {
                width: "100%",
                height: "auto",
                marginTop: "35%"
        },
        center: {
                margin: "auto",
                textAlign: "center",
                
        },
        centerp: {
                margin: "auto",
                textAlign: "center",
                fontSize: "1.2em"
        },
        boxStyling: {
                background: "white",
                height: "100%",
                width: "100%",
                padding: "4em",
                boxShadow: "2px 2px 10px #000000"
        },
        logo: {
                height: "auto",
                width: "6em",
                margin: "auto",
                padding: ".2em"
        }
}

class AboutPage extends React.Component{
        constructor(props) {
                super(props);

        }
        
        render (){

        return(
        <div style={styles.wholepage}>  
                <div style={styles.spacertop}></div>

                <Jumbotron style = {styles.jumbotron}>

                <h1 style = {styles.jumbotronText}>Get To Know James Dora</h1>
                <hr style = {styles.line}></hr>

                </Jumbotron>

                <Row><div style={styles.spacer}></div></Row>

                <Container>

                        <div style={styles.boxStyling}>

                        <Row>
                        <h1 style={styles.titleText}>Education</h1>
                        </Row>
                        
                        <Row><div style={styles.spacer}></div></Row>

                        <Row>
                                <Col sm = "3">
                                <Row><div style={styles.spacer}></div></Row>
                                <img src = {elevenFiftyLogo} style={styles.img}></img>
                                </Col>

                                <Col sm = "1"></Col>

                                <Col sm = "8">

                                <Row><div style={styles.spacer}></div></Row>

                                <Row><h2 style = {styles.center}>Eleven Fifty</h2></Row>

                                <Row><div style={styles.spacer}></div></Row>

                                <Row><p style = {styles.centerp}> I joined Eleven Fifty's Javascript Cohort in March of 2019. I originally became interested in Eleven Fifty's Javascript bootcamp when I decided that I really wanted to sharpen my skills as a web developer and find a job where I could really exercise my creativity and problem solving abilities. Throughout my time at Eleven Fifty I gained more than 500 hours in hands on experience with Javascript. Eleven Fifty helped me to expand my knowledge of Javascript, React, Node.Js, Angular and much more in addition to helping me develop soft skills such as team work and teaching others. I think my time at ElevenFifty was invaluable and really helped me become a stronger developer.</p></Row>
                                </Col>
                        </Row>

                        <Row><div style={styles.spacer}></div></Row>

                        <Row>
                                <Col sm = "3">
                                <Row><div style={styles.spacer}></div></Row>
                                
                                <img src = {iuLogo} style={styles.img}></img>
                                </Col>

                                <Col sm = "1"></Col>

                                <Col sm = "8">

                                <Row><div style={styles.spacer}></div></Row>

                                <Row><h2 style = {styles.center}>Indiana University</h2></Row>

                                <Row><div style={styles.spacer}></div></Row>

                                <Row><p style = {styles.centerp}> I attended Indiana University from 2014 to 2018 and during my time there I earned a Bachelor of Science in Computer Informatics as well as a Minor in Business from the Kelly School of Business. When I originally began studying at IU I was considering majoring in Business, but after taking a couple of programming classes I fell in love with the idea of becoming a developer and decided to lean more in that direction while still attaining the Business Minor. While pursuing my Informatics degree I was exposed to many different programming technologies including Python, HTML, CSS, Java, C#, Android Development, SQL, PHP, and more. This degree was a great opportunity for me to gain exposure to a lot of different technologies and I think this wide exposure has given me the ability to learn new programming skills easily and efficiently.</p></Row>
                                </Col>
                        </Row>
                        </div>
                        <Row><div style={styles.spacer}></div></Row>



                        <div style={styles.boxStyling}>
                        
                        <Row>
                        <h1 style={styles.titleText}>Technical Skills</h1>
                        </Row>

                        <Row><div style={styles.spacer}></div></Row>

                        <Row>
                        <Col sm="2"><img src = {androidLogo} style = {styles.logo}></img></Col>
                        <Col sm="2"><img src = {angularLogo} style = {styles.logo}></img></Col>
                        <Col sm="2"><img src = {apiLogo} style = {styles.logo}></img></Col>
                        <Col sm="2"><img src = {cssLogo} style = {styles.logo}></img></Col>
                        <Col sm="2"><img src = {htmlLogo} style = {styles.logo}></img></Col>
                        <Col sm="2"><img src = {nodeLogo} style = {styles.logo}></img></Col>
                        </Row>

                        <Row><div style={styles.spacer}></div></Row>

                        <Row>
                        <Col sm="2"><img src = {postmanLogo} style = {styles.logo}></img></Col>
                        <Col sm="2"><img src = {pythonLogo} style = {styles.logo}></img></Col>
                        <Col sm="2"><img src = {radiumLogo} style = {styles.logo}></img></Col>
                        <Col sm="2"><img src = {reactLogo} style = {styles.logo}></img></Col>
                        <Col sm="2"><img src = {sqlLogo} style = {styles.logo}></img></Col>
                        <Col sm="2"><img src = {visualStudioLogo} style = {styles.logo}></img></Col>
                        </Row>

                        

                        
                        </div>
                        <Row><div style={styles.spacer}></div></Row>

                        {/* <div style={styles.boxStyling}>
                        
                        <Row>
                        <h1 style={styles.titleText}>Soft Skills</h1>
                        </Row>

                        
                        </div> */}
                        <Row><div style={styles.spacer}></div></Row>

                </Container>

        </div>
        )}
}
export default Radium(AboutPage);