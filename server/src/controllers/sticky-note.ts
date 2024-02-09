import { StickyNote } from '../models/sticky-note';

export const add = async (req, res) => {
  const body = req.body;

  var stickyNote = new StickyNote({
    title: body.title,
    description: body.description,
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
    const stickyNote = StickyNote.findByIdAndDelete(req.params.id);
    res.send(stickyNote);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getSingle = async (req, res) => {
  try {
    const stickyNote = StickyNote.find(req.params.id);
    res.send(stickyNote);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getAll = async (req, res) => {
  try {
    const stickyNotes = StickyNote.find({});
    res.send(stickyNotes);
  } catch (error) {
    res.status(500).send(error);
  }
};
