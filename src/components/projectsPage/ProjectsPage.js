import React from 'react'; 
import Radium from 'radium';
import BeatShareProject from '../projects/BeatShareProject';
import PokeAPIproject from '../projects/PokeAPIproject';
import PotfolioV1 from '../projects/PortvolioV1project';
import {Jumbotron} from 'reactstrap';
import background from '../../assets/images/circuitboard2.jpg'
import PortvolioV1project from '../projects/PortvolioV1project';

const styles = {
        wholepage: {
                backgroundColor: "#dbdbdb"
        },
        spacertop : {
                height : "4em"
        },
        spacer : {
                height : "3em"
        },
        maincontent : {
                backgroundColor: "#dbdbdb",
                height: "100%"
        },
        pagehead : {
                height: "12.5em"

        },
        line: {
                width : "auto",
                height: ".5px",
                background: "#333",
                backgroundImage: "linear-gradient(to right, #333, #ccc, #333)"
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
        }

}



class ProjectsPage extends React.Component{
        constructor(props) {
                super(props);

        }
        
        render (){

        return(
        <div style={styles.wholepage}>  

                <div style = {styles.spacertop}></div>


                <Jumbotron style = {styles.jumbotron}>
                
                <h1 style = {styles.jumbotronText}>See Some Examples of My Work</h1>
                <hr style = {styles.line}></hr>

                </Jumbotron>

                <div style = {styles.maincontent}>
                        <BeatShareProject />
                        <div style = {styles.spacer}></div>
                        <PokeAPIproject />
                        <div style = {styles.spacer}></div>
                        <PortvolioV1project />

                        <div style = {styles.spacertop}></div>
                </div>




        </div>
        )}
}
export default Radium(ProjectsPage);