import React from 'react';
import NoteButton from './NoteButton'

import { Button, ButtonToolbar } from 'react-bootstrap';

class Note extends React.Component {
    constructor(){
        super();
    }

    render() {
        var notes = [
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "G"
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