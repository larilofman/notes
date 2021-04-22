import React from 'react';
import './style.scss';
import Button from '../Button';
import { NoteType } from '../../../types';

interface Props {
  note: NoteType,
  deleteNote: (note: NoteType) => void
}

const Note: React.FC<Props> = ({ note, deleteNote }) => (
  <li className="note">
    {note.text}
    <Button
      onClick={deleteNote(note)}
      id={`delete-${note.text}`}
    >
      Delete
    </Button>
  </li>
);

export default Note;
