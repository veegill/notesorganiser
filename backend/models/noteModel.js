import mongoose from "mongoose";
import OpenAI from "aiService";

const noteSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    category: { type: String, required: true },
    sentiment: { type: String, enum: ["Positive", "Neutral", "Negative"] },
    summary: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Note", noteSchema);
