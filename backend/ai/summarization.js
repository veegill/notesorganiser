const SUMMARIZATION_MODEL_URL = 'https://api-inference.huggingface.co/models/facebook/bart-large-cnn';

export const summarizeNote = async (noteContent) => {
  try {
    const response = await axios.post(
      SUMMARIZATION_MODEL_URL,
      { inputs: noteContent },
      { headers: { Authorization: `Bearer ${HUGGINGFACE_API_TOKEN}` } }
    );

    return response.data[0].summary_text;
  } catch (error) {
    console.error('Error summarizing note:', error);
    return noteContent; // Return original if summarization fails
  }
};
