import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import noteRoutes from "./routes/noteRoutes.js";

dotenv.config(); // Load environment variables

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/notes", noteRoutes);

export default app; // Export Express app
