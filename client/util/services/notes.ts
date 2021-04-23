import axios from 'axios';
import { NoteType } from '../../../types';

const basePath = '/api/notes';

export const getNotes = async () => {
  const response = await axios.get(basePath);
  return response.data;
};

export const postNote = async (note: NoteType) => {
  const response = await axios.post(basePath, { note });
  return response.data;
};

export const deleteNote = async (note: NoteType) => {
  const response = await axios.delete(`${basePath}/${note.id}`);
  return response.data;
};
