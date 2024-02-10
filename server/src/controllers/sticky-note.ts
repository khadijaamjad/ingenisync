import { StickyNote } from '../models/sticky-note';

export const add = async (req, res) => {
  const body = req.body;

  var stickyNote = new StickyNote({
    title: body.title,
    noteText: body.noteText,
  });

  try {
    await stickyNote.save();
    res.send(stickyNote);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const update = async (req, res) => {
  try {
    const stickyNote = await StickyNote.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.send(stickyNote);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const deleteSingle = async (req, res) => {
  try {
    const stickyNote = await StickyNote.findByIdAndDelete(req.params.id);
    res.send(stickyNote);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getSingle = async (req, res) => {
  try {
    const stickyNote = await StickyNote.findById(req.params.id);
    res.send(stickyNote);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getAll = async (req, res) => {
  try {
    const stickyNotes = await StickyNote.find({});
    res.send(stickyNotes);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};
