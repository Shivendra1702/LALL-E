import express from "express";
import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

import Post from "../mongodb/models/post.js";

const router = express.Router();
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

router.route("/").get(async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).json({ status: true, data: posts });
  } catch (error) {
    res.status(500).json({ status: false, message: error });
  }
});

router.route("/").post(async (req, res) => {
  try {
    const { name, prompt, photo } = req.body;

    // console.log(req.body);

    const photoUrl = await cloudinary.uploader.upload(photo);

    // console.log(photoUrl);

    const newPost = await Post.create({
      name,
      prompt,
      photo: photoUrl.url,
    });

    // console.log(newPost);

    res.status(200).json({ status: true, data: newPost });
  } catch (error) {
    res.status(500).json({ status: false, message: error });
  }
});

export default router;
