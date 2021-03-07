import React from 'react';
import './style.scss';
import Button from '../Button';

const Note = ({ note, deleteNote }) => (

  <li className="note">
    {note.body}
    <Button onClick={deleteNote(note)}>
      Delete
    </Button>
  </li>
);

export default Note;
