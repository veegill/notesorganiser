import { analyzeSentiment } from '../ai/sentiment.js';

app.post('/api/notes', async (req, res) => {
  const { title, content } = req.body;
  const sentiment = await analyzeSentiment(content);

  const newNote = new Note({ title, content, sentiment });
  await newNote.save();

  res.status(201).json(newNote);
});
