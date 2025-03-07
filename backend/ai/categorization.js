import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const HUGGINGFACE_API_TOKEN = process.env.HUGGINGFACE_API_TOKEN;
const MODEL_URL = 'https://api-inference.huggingface.co/models/facebook/bart-large-mnli';

export const categorizeNote = async (noteContent) => {
  try {
    const response = await axios.post(
      MODEL_URL,
      {
        inputs: noteContent,
        parameters: {
          candidate_labels: ['Work', 'Personal', 'Ideas', 'Miscellaneous'],
        },
      },
      {
        headers: { Authorization: `Bearer ${HUGGINGFACE_API_TOKEN}` },
      }
    );

    return response.data.labels[0]; // Return the most relevant category
  } catch (error) {
    console.error('Error categorizing note:', error);
    return 'Uncategorized';
  }
};
