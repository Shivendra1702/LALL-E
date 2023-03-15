import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import { connectDB } from "./mongodb/connect.js";
import postRoutes from "./routes/postRoutes.js";
import lalleRoutes from "./routes/lalleRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/lalle", lalleRoutes);
app.use("/api/v1/post", postRoutes);

app.get("/", (req, res) => {
  res.send("Hello From LALL-E");
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(8080, () => {
      console.log(`Server has Started on PORT 8080`);
    });
  } catch (error) {
    console.log(`Some Error occured :${error}`);
  }
};

startServer();
