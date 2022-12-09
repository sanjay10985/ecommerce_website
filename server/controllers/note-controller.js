import Note from "../models/Note.js";

export const getNotes = async (req,res) =>{
    let notes;
    try {
        notes = await Note.find();
    } catch (err) {
        console.log(err)
    }
    return res.json(notes);
}

export const createNote = async (req, res) => {
  const { title, description } = req.body;
  let note;
  try {
    note = new Note({
      title,
      description,
    });
    await note.save();
  } catch (error) {
    return console.log(error);
  }
  if (!note) {
    return res.status(400).json({ message: "note in not created" });
  }
  return res.status(201).send(note);
};

export const editNote = async (req, res) => {
  const id = req.params.id;
  const { title, description } = req.body;
  let note;
  try {
    const newNote = {};
    if (title) {
      newNote.title = title;
    }
    if (description) {
      newNote.description = description;
    }
    note = await Note.findById(id);

    if (!note) {
      return res.status(404).send("Not Found");
    }

    note = await Note.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { new: true }
    );
  } catch (error) {
    console.log(error);
  }
  return res.json({ note });
};

export const deleteNote = async (req, res) => {
  const id = req.params.id;
  let note;
  try {
    note = await Note.findByIdAndDelete(id);
  } catch (error) {
    return console.log(error);
  }
  return res.status(200).json({ message: "successfully deleted the note" });
};
