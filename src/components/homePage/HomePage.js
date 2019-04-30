import React from 'react'; 
import Radium from 'radium';
import RecentProjects from '../recentProjects/RecentProjects'
import picture from '../../assets/images/headshot2.png';
import { Container, Row, Col, Button, Jumbotron } from 'reactstrap';
import './homepage.css';
import background from '../../assets/images/circuitboard2.jpg';
import personalLogo from '../../assets/images/logo_transparent.png';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const styles = {
        wholepage: {
                backgroundColor: "#dbdbdb",
                height: "100%"
        },
        spacertop : {
                height : "4em"
        },
        spacer : {
                height : "1.5em"
        },
        line: {
                width : "30em",
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
        maincontent : {
                backgroundColor: "#dbdbdb",
                height: "100%",
                overflowY: "none"
        },
        introduction : {
                backgroundColor: "white",
                padding: "1em",
                fontSize: "1em"
        },
        introductionbutton : {
                backgroundColor: "black",
                margin: "auto"
        },
        jumbotron: {
                backgroundImage: `url(${background})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: 'white'

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
                textAlign: "center"
        },
        container: {
                backgroundColor: "white",
                padding: "4em",
                boxShadow: "2px 2px 10px #000000"
        }
        
        
       

}





class HomePage extends React.Component{
        constructor(props) {
                super(props);

        }
        
        render (){

        return(
        <div style = {styles.wholepage}>  
                <div style={styles.spacertop}></div>

                <Jumbotron style = {styles.jumbotron}>
                        <img src = {personalLogo} style = {styles.logo} id = "logo"></img>
                        <div style={styles.spacer}></div>
                        <p style={styles.subtext}>Junior Developer, Indiana University Alumnus, Eleven Fifty Graduate</p>

                </Jumbotron>


                <div style = {styles.maincontent}>
                <Container>

                        <Row>
                                
                                <Col sm="4">
                                <div style={styles.spacer}></div>
                                <img src={picture} style = {styles.headshot} id = "headshot" data-aos="flip-right" data-aos-duration="900"></img>
                                <div style={styles.spacer}></div>
                                </Col>

                                <Col sm="8">

                                <Row><div style = {styles.spacer}></div></Row>

                                <Row><p style = {styles.paragraph}>My names is James Dora and I am a Javascript developer. I have a Bachelor of Science in Computer Informatics and a Minor in Business from Indiana University Bloomington. I have been programming for a little more than 3 years and I think it is something I truly have a knack for. Over the years I have gained experience with many different programming languages/skills including Python, SQL, Android Studio, Java, Javascript, HTML, and CSS. Recently my main focus has been on web development and improving my abilities with Javascript, React, Node, and Angular. Nothing excites me more than learning new programming skills and having the opportunity to put them into practice. I am always working to expand my abilities and I am excited to put them to the test in the near future when I join the workforce.</p></Row>

                                <Row><div style = {styles.spacer}></div></Row>

                                {/* <Row>
                                <form action="www.linkedin.com/in/james-dora-2950b3aa" method="get" target="_blank" style = {styles.form}>
                                        <Button style = {styles.introductionbutton} type = "submit">Connect With Me on Linkedin</Button>
                                </form>
                                </Row> */}
                                
                                </Col>
                        </Row>

                        <Row><div style = {styles.spacer}></div></Row>
                        <Row><div style = {styles.spacer}></div></Row>
                        <Row><div style = {styles.spacer}></div></Row>
                        <Row><div style = {styles.spacer}></div></Row>



                </Container>
                
                
                        


                        
                </div>


        </div>
        )}
}
export default Radium(HomePage);