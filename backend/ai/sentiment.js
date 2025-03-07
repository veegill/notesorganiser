const SENTIMENT_MODEL_URL = 'https://api-inference.huggingface.co/models/michellejieli/distilbert-base-uncased-emotion';

export const analyzeSentiment = async (noteContent) => {
  try {
    const response = await axios.post(
      SENTIMENT_MODEL_URL,
      { inputs: noteContent },
      { headers: { Authorization: `Bearer ${HUGGINGFACE_API_TOKEN}` } }
    );

    return response.data[0].label; // Returns sentiment like Positive, Neutral, Negative
  } catch (error) {
    console.error('Error analyzing sentiment:', error);
    return 'Neutral';
  }
};
