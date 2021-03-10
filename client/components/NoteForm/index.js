import React, { useState } from 'react';
import './style.scss';
import Button from '../Button';

const NoteForm = ({ postNote }) => {
  const [note, setNote] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (note) {
      postNote(note);
      setNote('');
    }
  };

  const handleChange = ({ target }) => setNote(target.value);

  return (
    <div className="note-form">
      <form action="submit" onSubmit={handleSubmit}>
        <label htmlFor="new-note">
          Add new note
          <input
            className="form-text-field"
            placeholder="Enter a note."
            name="new-note"
            id="new-note"
            value={note}
            onChange={handleChange}
          />
        </label>
        <Button
          type="submit"
          disabled={!note}
        >
          Add
        </Button>
      </form>

    </div>
  );
};

export default NoteForm;
