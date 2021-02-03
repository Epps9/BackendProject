const express = require('express');
const router = express.Router();

const Post = require('../models/post.model');

router.get('/posts', async (req, res) => {
  try {
    const result = await Post
      .find({status: 'published'})
      .select('author created title photo status text')
      .sort({created: -1});
    if(!result) res.status(404).json({ post: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

router.get('/posts/:id', async (req, res) => {
  try {
    const result = await Post
      .findById(req.params.id)
    if(!result) res.status(404).json({ post: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

router.post('/posts', async (req,res) => {
  try {
    const { id, title, author, text, created, updated, email, status, photo, price, phone, location } = (req.body);
      const newPost = new Post({id: id, title: title, author: author, text: text, created: created, updated: updated, email: email, status: status, photo: photo, price: price, phone: phone, location: location });
      await newPost.save();
      res.json({message: 'new post saved'});
  }
  catch(err) {
    res.status(500).json(err);
  }
});

module.exports = router;
