import React from 'react';
import axios from 'axios';
import {Grid, Row, Col} from 'react-bootstrap';
import { Button, ButtonToolbar } from 'react-bootstrap';

import Note from './Note';
import PlayNote from './PlayNote';

var soundList = [
    "A4",
    "B4",
    "C4",
    "D4",
    "E4",
    "F4",
    "G4",
    "A5"
];

class Layout extends React.Component {
    constructor(){
        super();
        this.state = { sound: ''};
    }
    changeSound(){

    }

    componentDidMount(){

        let note = soundList[Math.floor(Math.random() * soundList.length)];
        axios.get('/api/sounds/'+note)
            .then(response => {
                let file = response.data[0].file;
                let filename = response.data[0].hashed;
                this.setState({ sound: file });
            });
    }

    render() {

        const fillerStyle = {
            height: '25vh'
        };
        return <Grid
            bsClass={"container"}
            fluid={true}>
            <Row>
                <Col md={12} style={fillerStyle}/>
            </Row>
            <Row>
                <Col
                    md={4}
                    mdOffset={4}
                >

                    <Note/>  {/*Note Component*/}

                </Col>
            </Row>
            <Row>
                <Col
                    md={4}
                    mdOffset={4}
                >

                    <PlayNote sound={this.state.sound} /> {/*PlayNote Component*/}

                </Col>
            </Row>
            <Row>
                <Col
                    md={2}
                    mdOffset={6}
                >
                </Col>
            </Row>
        </Grid>
    }
}

export default Layout;