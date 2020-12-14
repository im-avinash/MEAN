const express = require("express");
const Post = require("../models/post");

const router = express.Router();

router.put("/:id", function (req, res, next) {
  const post = new Post({
    _id: req.body.id,
    title: req.body.title,
    content: req.body.content,
  });
  Post.updateOne({ _id: req.params.id }, post).then((result) => {
    console.log(result);
  });
  res.status(200).json({ message: "Post Updated successfully" });
});

router.post("", function (req, res, next) {
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
  });
  post.save().then((createdPost) => {
    res.status(201).json({
      message: "post added successfully",
      id: createdPost._id,
    });
  });
  //   console.log(post);
});

router.get("", function (req, res, next) {
  Post.find().then((documents) => {
    console.log(documents);
    res.status(200).json({
      message: "post fetched successfully",
      posts: documents,
    });
  });
});

router.delete("/:id", function (req, res, next) {
  Post.deleteOne({ _id: req.params.id }).then((result) => {
    console.log(result);
  });
  res.status(200).json({ message: "Post deleted" });
});

module.exports = router;
