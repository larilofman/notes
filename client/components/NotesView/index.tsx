import React, { useState, useEffect } from 'react';
import { getNotes, postNote, deleteNote } from '../../util/services/notes';

import NoteForm from '../NoteForm/index';
import NoteList from '../NoteList/index';

const NotesView = () => {
  const [notes, setNotes] = useState([]);

  const handleGetNotes = async () => {
    const newNotes = await getNotes();
    setNotes(newNotes);
  };

  useEffect(() => {
    handleGetNotes();
  }, []);

  const handlePostNote = async (newNote) => {
    await postNote(newNote);
    handleGetNotes();
  };


  const handleDeleteNote = async (note) => {
    await deleteNote(note);
    handleGetNotes();
  };

  return (
    <>
      <NoteForm postNote={handlePostNote} />
      <NoteList notes={notes} deleteNote={handleDeleteNote} />
    </>
  );
};
export default NotesView;
