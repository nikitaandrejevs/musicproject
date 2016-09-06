import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

import Note from './Note';
import PlayNote from './PlayNote';


class Layout extends React.Component {
    constructor(){
        super();
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
                    md={3}
                    mdOffset={4}
                >

                    <Note/>  {/*Note Component*/}

                </Col>
            </Row>
            <Row>
                <Col
                    md={3}
                    mdOffset={4}
                >

                    <PlayNote/> {/*PlayNote Component*/}

                </Col>
            </Row>
        </Grid>
    }
}

export default Layout;