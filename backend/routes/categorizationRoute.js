import { categorizeNote } from '../ai/categorization.js';

app.post('/api/notes', async (req, res) => {
  const { title, content } = req.body;
  const category = await categorizeNote(content);

  const newNote = new Note({ title, content, category });
  await newNote.save();
  
  res.status(201).json(newNote);
});
