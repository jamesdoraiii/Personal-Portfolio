import React from 'react'; 
import Radium from 'radium';
import { Container, Row, Col, Button } from 'reactstrap';

import pokemon from '../../assets/images/pokemon.jpg'


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
                width: "100%",
                boxShadow: "3px 4px 10px #000000"
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


                                <Row><h3 style = {styles.titleText}>Whos That Pokemon!? Api Project</h3></Row>

                                <Row><hr style = {styles.line}></hr></Row>

                                <Row>
                                        <div style = {styles.spacer}></div>
                                </Row>
                                
                                <Row><p>This project was one of the first major assignements I completed during my time at Eleven Fifty. I was tasked with finding a public API and then developing a website that was able to utilize that API in a creative and interesting way. I came up with the idea to use the PokeAPI and put together a fun browser game that mimics the Who's That Pokemon activity which would play during commercial breaks on the Pokemon Television show. My website uses math.random to select a random pokemon and fetch it from the api. It then displays the sprite for that pokemon using a css filter which makes it appear as a silhouette. The user gets a chance to guess the name of the Pokemon before the sprite is revealed and the user is told if their guess was right or wrong. The radio buttons for difficulty adjust how big of a pool the random Pokemon is chosen from with "easy" being the smallest and "hard" being the biggest. This was an incredibly fun project for me to put together that really helped me gain an understanding of how powerdul and useful API's can be when integrated into a web application. </p></Row>

                                <Row>
                                        <div style = {styles.spacer}></div>
                                </Row>

                                <Row>
                                        <Col xl = "6"><Button style={styles.button}><a href = "https://james-dora-whos-that-pokeapi.firebaseapp.com/" target = "_blank" style = {styles.link}>View Project</a></Button></Col>
                                        <Col xl = "6"><Button style={styles.button}><a href = "https://github.com/jamesdoraiii/api-project" target = "_blank" style = {styles.link}>View Github Repo</a></Button></Col>
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
                                        <Col sm = "3"><img img src={visualStudio} style = {styles.logo} data-aos="flip-right" data-aos-duration="900" data-aos-delay="400"></img></Col>
                                        <Col sm = "3"><img img src={apiLogo} style = {styles.logo} data-aos="flip-right" data-aos-duration="900" data-aos-delay="600"></img></Col>
                                </Row>

                        </Col>


                </Row>

        </Container>
        )}
}
export default Radium(ProjectsPage);