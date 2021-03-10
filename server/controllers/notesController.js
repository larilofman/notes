const { ApplicationError } = require('@util/customErrors');
const Note = require('../models/note');

const getAll = async (req, res) => {
  const notes = await Note.find({});
  res.send(notes);
};

const create = async (req, res) => {
  const { note } = req.body;
  if (!note) throw new ApplicationError('Message is required', 400);
  const mongoNote = new Note({ text: note });
  await mongoNote.save();

  res.send(mongoNote);
};

const destroy = async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.sendStatus(200);
};

module.exports = {
  getAll,
  create,
  destroy,
};
