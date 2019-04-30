import React from 'react'; 
import Radium from 'radium';
import {Jumbotron, Col, Row, Container} from 'reactstrap';
import background from '../../assets/images/circuitboard2.jpg'

const styles = {
        spacertop : {
                height : "4em"
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
}

class ResumePage extends React.Component{
        constructor(props) {
                super(props);

        }
        
        render (){

        return(
        <div>  
                <div style={styles.spacertop}></div>

                <Jumbotron style = {styles.jumbotron}>

                <h1 style = {styles.jumbotronText}>View My Resume</h1>
                <hr style = {styles.line}></hr>

                </Jumbotron>
                

        </div>
        )}
}
export default Radium(ResumePage);