import React, { useState, useEffect } from 'react';
import { getMessages, postMessage, deleteMessage } from 'Utilities/services/messages';

import NoteForm from 'Components/NoteForm/index';
import NoteList from 'Components/NoteList.js/index';

const NotesView = () => {
  const [notes, setNotes] = useState([]);

  const handleGetNotes = async () => {
    const newMessages = await getMessages();
    setNotes(newMessages);
  };

  useEffect(() => {
    handleGetNotes();
  }, []);

  const handlePostNote = async (newMessage) => {
    await postMessage(newMessage);
    handleGetNotes();
  };


  const handleDeleteNote = async (message) => {
    await deleteMessage(message);
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
