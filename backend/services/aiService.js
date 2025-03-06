import { OpenAI } from 'openai';

const openAI = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const summarizeNote = async (content) => {
  try {
    const response = await openAI.completions.create({
      model: 'text-davinci-003',
      prompt: `Summarize the following text: ${content}`,
      max_tokens: 100,
    });
    return response.choices[0].text.trim();
  } catch (error) {
    console.error('Error summarizing note:', error);
    return null;
  }
};

export default {
  summarizeNote,
};
