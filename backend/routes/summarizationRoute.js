import { summarizeNote } from '../ai/summarization.js';

app.post('/api/notes', async (req, res) => {
  const { title, content } = req.body;
  const summary = await summarizeNote(content);

  const newNote = new Note({ title, content, summary });
  await newNote.save();

  res.status(201).json(newNote);
});
