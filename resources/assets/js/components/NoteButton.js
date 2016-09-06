import React from 'react';


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
        const popoverHoverFocus = (
            <Popover id="popover-trigger-hover-focus" title='Scale ${this.props.note} Note'>
                Note's scale Picture.
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