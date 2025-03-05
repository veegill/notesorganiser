import Note from "../models/noteModel.js";
import axios from "axios";

export const getNotes = async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
};

export const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;

    // AI-powered categorization & summarization
    const aiResponse = await axios.post("AI_API_URL", { text: content });
    const category = aiResponse.data.category;
    const summary = aiResponse.data.summary;

    const note = new Note({ title, content, category, summary });
    await note.save();
    res.status(201).json(note);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteNote = async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.status(204).send();
};
