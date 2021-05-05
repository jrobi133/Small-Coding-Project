// import express from "express";

// import {
//   getPosts,
//   getPost,
//   createPost,
//   updatePost,
//   likePost,
//   deletePost,
// } from "../controllers/posts.js";

// const router = express.Router();

// router.get("/", getPosts);
// router.post("/", createPost);
// router.get("/:id", getPost);
// router.patch("/:id", updatePost);
// router.delete("/:id", deletePost);
// router.patch("/:id/likePost", likePost);

// export default router;

const path = require("path");
const router = require("express").Router();
const {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
} = require("../controllers/posts.js");

router.get("/", getPosts);
router.post("/", createPost);
router.get("/:id", getPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);

router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../../client/build/index.html"))
);

module.exports = router;
