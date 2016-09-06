import React from 'react';
// import * from 'react-bootstrap';
import {Button, ButtonToolbar} from 'react-bootstrap';
import {Image} from 'react-bootstrap'

var Howl = require('howler').Howl;
var sound;

class PlayNote extends React.Component {
    constructor(){
        super();
    }
    play(){
        sound.play();
        console.log(this.props.sound);
    }
    initHowler(){
        sound = new Howl({
            src: ['storage/' + this.props.sound]
        });
    }



    render() {
        this.initHowler();
        const buttonStyle = {
            width: '100%'
        };

        return <div>
            <ButtonToolbar>
                <Button
                    onClick={this.play.bind(this)}
                    style={buttonStyle}
                >
                    <Image
                        bsClass='Image--fit '
                        src="/assets/scale.jpg" rounded />
                </Button>
            </ButtonToolbar>

        </div>;
    }
}

export default PlayNote;