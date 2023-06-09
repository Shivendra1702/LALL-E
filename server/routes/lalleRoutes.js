import express from "express";
import * as dotenv from "dotenv";
import { OpenAIApi, Configuration } from "openai";

import Post from "../mongodb/models/post.js";

const router = express.Router();
dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

router.route("/").get((req, res) => {
  res.send("HeY");
});

router.route("/").post(async (req, res) => {
  try {
    const { prompt } = req.body;

    // console.log(prompt);

    const aiResponse = await openai.createImage({
      prompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    });

    // console.log(aiResponse);

    const image = aiResponse.data.data[0].b64_json;

    res.status(200).json({ photo: image });
  } catch (error) {
    res.status(500).send(error?.response.data.error.message);
  }
});

export default router;
