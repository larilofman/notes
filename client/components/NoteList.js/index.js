import React from 'react';
import './style.scss';
import Note from '../Note';

const NoteList = ({ notes, deleteNote }) => {
  if (!notes) return null;

  const handleDelete = (note) => () => {
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
