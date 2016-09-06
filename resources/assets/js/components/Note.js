import React from 'react';
import NoteButton from './NoteButton'

import { Button, ButtonToolbar } from 'react-bootstrap';

class Note extends React.Component {
    constructor(){
        super();
    }

    render() {
        var notes = [
            "C4",
            "D4",
            "E4",
            "F4",
            "G4",
            "A4",
            "B4",
            "C5"
        ];

        return (
            <ButtonToolbar bsClass="Note--align ">
                {
                    notes.map(
                        (elem, key) => <NoteButton key={key} note={elem} />
                    )
                }
            </ButtonToolbar>
        );
    }
}

export default Note;