import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import { Button, ButtonToolbar } from 'react-bootstrap';

import Note from './Note';
import PlayNote from './PlayNote';

var soundList = [
    "a4.mp3",
    "b4.mp3",
    "c4.mp3",
    "d4.mp3",
    "e4.mp3",
    "f4.mp3",
    "g4.mp3",
    "a5.mp3"
];

class Layout extends React.Component {
    constructor(){
        super();
    }

    changeSound(){

    }


    render() {
        const fillerStyle = {
            height: '25vh'
        };

        let sound = "a4.mp3";
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

                    <PlayNote sound={sound} /> {/*PlayNote Component*/}

                </Col>
            </Row>
            <Row>
                <Col
                    md={2}
                    mdOffset={6}
                >
                    <ButtonToolbar>
                        <Button onClick={this.changeSound} />
                    </ButtonToolbar>
                </Col>
            </Row>
        </Grid>
    }
}

export default Layout;