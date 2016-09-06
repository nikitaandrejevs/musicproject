import React from 'react';

import { Image } from 'react-bootstrap'
import { Button, ButtonToolbar } from 'react-bootstrap';
import { OverlayTrigger, Popover } from 'react-bootstrap';


class NoteButton extends React.Component {
    constructor(){
        super();
    }

    render() {
        const noteButtonStyle = {
            flexGrow: '1'
        };
        const popoverImageStyle = {
            width: '100%',
            height: '100%'
        };

        const imagePath = "assets/notes/note_" + this.props.note.toLowerCase() + ".png";

        const popoverHoverFocus = (
            <Popover id="popover-trigger-hover-focus">
                <Image src={imagePath} style={popoverImageStyle} />
            </Popover>
        );

        return (
        <OverlayTrigger trigger={['hover', 'focus']} placement="top" overlay={popoverHoverFocus}>
            <Button
                bsSize="large"
                style={noteButtonStyle}
            > {this.props.note} </Button>
        </OverlayTrigger>);
    }
}

export default NoteButton;