import React from 'react';
import './style.scss';
import Note from '../Note';

const NoteList = ({ notes, deleteNote }) => {
  console.log(notes);
  if (!notes.length) {
    return (
      <div>
        <h3 className="loading-text-container">Loading notes...</h3>
      </div>

    );
  }

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
