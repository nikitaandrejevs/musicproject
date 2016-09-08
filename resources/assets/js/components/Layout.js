import React from 'react';
import axios from 'axios';
import {Grid, Row, Col} from 'react-bootstrap';
import { Button, ButtonToolbar } from 'react-bootstrap';

import Note from './Note';
import PlayNote from './PlayNote';


class Layout extends React.Component {
    constructor(){
        super();
        this.state = {
            sound: '',
            hashed: ''
        };
    }
    checkNote(note){
        console.log(this.state.hashed);
        axios.get(`/api/sound/${note}?check=${this.state.hashed}`)
            .then(response => {
                console.log(response);
                if (response.data == 1) {
                    //show flashing message OK
                    console.log("Right note! Congraz", note);
                    this.changeSound();
                }
                else {
                    //show flashing message OK
                    console.log("Wrong note", note , " response: ", response.data);
                }
            })
            .catch(error => { console.log(error); });

    }
    changeSound(){
        axios.get('/api/sound/')
            .then(response => {
                let file = response.data.file;
                let hashed = response.data.hashed;
                this.setState({ sound: file, hashed });
            })
            .catch(error => { console.log(error); });
    }

    componentDidMount(){
        axios.get('/api/sound/')
            .then(response => {
                let file = response.data.file;
                let hashed = response.data.hashed;
                this.setState({ sound: file, hashed });
            })
            .catch(error => { console.log(error); });
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

                    <Note checkNote={this.checkNote.bind(this)}/>  {/*Note Component*/}

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