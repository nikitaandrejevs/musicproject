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
    }
    initHowler(){
        sound = new Howl({
            src: `data:audio/mp3;base64,${this.props.sound}`, //For some reason the Howl is playing the sound, but still throwing an error "Uncaught (in promise) DOMException: Unable to decode audio data"
            type: 'audio/mp3' //redundant
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