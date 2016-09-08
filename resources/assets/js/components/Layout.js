import React from 'react';
import axios from 'axios';
import { Grid, Row, Col } from 'react-bootstrap';
import { Fade } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

import Note from './Note';
import PlayNote from './PlayNote';



var fadeClass = [
    "Layout__flash-message"
];

var timeOutID = '';

class Layout extends React.Component {
    constructor(){
        super();
        this.state = {
            sound: '',
            hashed: '',
            status: '',
            showHelp: false
        };
    }
    openHelp() {
        this.setState({
            showHelp: true
        });
    };

    closeHelp(){
        this.setState({
            showHelp: false
        });
    }

    flashMessage(status){
        if (timeOutID) {
            if (fadeClass.length > 1) fadeClass.pop();
            clearTimeout(timeOutID);
        }
        this.setState({
            status
        });
        fadeClass.push(`Layout__flash-message--${status}`);
        timeOutID = setTimeout(() => {
            fadeClass.pop();
            this.setState({
                status: ''
            });
        },1000);

    }
    checkNote(note){
        axios.get(`/api/sound/${note}?check=${this.state.hashed}`)
            .then(response => {
                if (response.data == 1) {
                    this.flashMessage('Right');
                    this.changeSound();
                }
                else {
                    this.flashMessage('Wrong');
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
    flashMessageType() {
    }

    componentDidMount(){
        this.changeSound();
    }

    render() {
        const fillerStyle = {
            height: '25vh'
        };

        return <div>
            <Modal show={this.state.showHelp} onHide={this.closeHelp.bind(this)}>
                <Modal.Header>
                    <Modal.Title>
                        Violin Pitch Training application
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h3> Instructions </h3>
                    <br/>
                    <p> 1. Press on the note's scale sheet to play a random sound</p>
                    <p> 2. Press on the Note's button to match the sound</p>
                    <hr/>
                    <p>If you match correctly, repeat.</p>
                    <p>Have Fun!</p>
                </Modal.Body>
            </Modal>
            <Grid
                bsClass={"container"}
                fluid={true}>
                <Row>
                    <Col md={1} mdOffset={11}>
                        <i onClick={this.openHelp.bind(this)} className="material-icons md-48 Icon">
                            help_outline
                        </i>
                    </Col>
                </Row>
                <Row>
                    <Col md={4} mdOffset={4} style={fillerStyle}>
                    </Col>
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
                    <Col md={4} mdOffset={4} style={fillerStyle}>
                        <Fade timeout={600}  in={this.state.status ? true : false}>
                            <p className={fadeClass}> {this.state.status} </p>
                        </Fade>
                    </Col>
                </Row>
            </Grid>
        </div>
    }
}

export default Layout;