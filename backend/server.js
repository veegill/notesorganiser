import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app.js";

dotenv.config(); // Load .env file

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI; // Ensure this is defined

if (!MONGO_URI) {
  console.error("❌ ERROR: MONGO_URI is missing in .env file");
  process.exit(1); // Exit the app if DB connection string is missing
}

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected...");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => console.error("❌ MongoDB connection error:", err));

  

