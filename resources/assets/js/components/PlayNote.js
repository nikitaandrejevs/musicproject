import React from 'react';
// import * from 'react-bootstrap';
import {Button, ButtonToolbar} from 'react-bootstrap';
import {Image} from 'react-bootstrap'

var Howl = require('howler').Howl;
var sound = new Howl({
    // src: ['./storage/app/public/a.mp3']
    src: ['storage/a.mp3']
});


class PlayNote extends React.Component {
    constructor(){
        super();
    }
    Play(){
        sound.play();
    }
    render() {
        const buttonStyle = {
            // border: 'none'
        };

        return <div>
            <ButtonToolbar>
                <Button
                    onClick={this.Play}
                    style={buttonStyle}
                >
                    <Image
                        bsClass='Image--fit '
                        src="/assets/note.png" rounded />
                </Button>
            </ButtonToolbar>

        </div>;
    }
}

export default PlayNote;