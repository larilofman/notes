import React from 'react';
import './style.scss';
import Note from '../Note';
import { NoteType } from '../../../types';

interface Props {
  notes: NoteType[],
  deleteNote: (note: NoteType) => Promise<void>
}

const NoteList: React.FC<Props> = ({ notes, deleteNote }) => {
  console.log(notes);
  if (!notes.length) {
    return (
      <div>
        <h3 className="loading-text-container">Loading notes...</h3>
      </div>

    );
  }

  const handleDelete = (note: NoteType) => () => {
    deleteNote(note);
  };

  return (
    <div className="note-list-container">
      <ul className="note-list">
        {notes.map((note) => (
          <Note
            key={note.id}
            note={note}
            deleteNote={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
};


export default NoteList;
