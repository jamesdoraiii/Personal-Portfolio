import React from 'react'; 
import Radium from 'radium';
import { Container, Row, Col, Button, Form, Input, FormGroup, Label, Jumbotron } from 'reactstrap';
import background from '../../assets/images/circuitboard2.jpg'

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
        form: {
                width: "70%",
                margin: "auto",
                backgroundColor: "white",
                padding: "2em",
                boxShadow: "2px 2px 10px #000000"
        },
        formHeaders: {
                textDecoration: "underline",
                textDecorationColor: "#008558",
                fontSize: "2em",
        },
        button : {
                backgroundColor: "black",
                margin: "auto"
        },
        messageBox : {
                height: "16vh"
        }
}


class HomePage extends React.Component{
        constructor(props) {
                super(props);

        }
        
        render (){

        return(
        <div style={styles.wholepage}>

        <div style={styles.spacertop}></div>

                <Jumbotron style = {styles.jumbotron}>
                
                <h1 style = {styles.jumbotronText}>Get In Touch With Me</h1>
                <hr style = {styles.line}></hr>

                </Jumbotron>

        <Container> 
                <Row>
               <Form action="https://formspree.io/jamesdoraiii@gmail.com" method="POST" style={styles.form}>
                
                <FormGroup>
                        <Label for="Name:" style={styles.formHeaders}>Name:</Label>
                        <Input type="text" name="name" id="Name"></Input>
                </FormGroup>

                <FormGroup>
                        <Label for="Email" style={styles.formHeaders}>Email:</Label>
                        <Input type="email" name="_replyto"></Input>
                </FormGroup>

                <FormGroup>
                        <Label for="Name:" style={styles.formHeaders}>Subject:</Label>
                        <Input type="text" name="_subject"></Input>
                </FormGroup>

                <FormGroup>
                        <Label for="Name:" style={styles.formHeaders}>Message:</Label>
                        <Input type="text" name="message" style={styles.messageBox}></Input>
                </FormGroup>

                        <Button type="submit" value="Send" style = {styles.button}>Submit</
                        Button>
                </Form>
                </Row>
        </Container> 
        <div style={styles.spacer}></div>
        </div>
        )}
}
export default Radium(HomePage);