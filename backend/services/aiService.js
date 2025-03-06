const OpenAI = require("openai-api");
const openai = new OpenAI(process.env.OPENAI_API_KEY);

exports.summarizeNote = async (content) => {
  const gptResponse = await openai.complete({
    engine: "text-davinci-003",
    prompt: `Summarize this note: ${content}`,
    maxTokens: 50
  });
  return gptResponse.data.choices[0].text.trim();
};