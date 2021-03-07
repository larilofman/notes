import React, { useState } from 'react';
import './style.scss';
import Button from '../Button';

const NoteForm = ({ postNote }) => {
  const [note, setNote] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    postNote(note);
    setNote('');
  };

  const handleChange = ({ target }) => setNote(target.value);

  return (
    <div className="note-form">
      <form action="submit">
        <label htmlFor="new-note">
          Add new note
          <input
            className="form-input"
            name="new-note"
            id="new-note"
            value={note}
            onChange={handleChange}
          />
        </label>
        <Button
          type="submit"
          onClick={handleSubmit}
        >
          Add
        </Button>
      </form>

    </div>
  );
};

export default NoteForm;
