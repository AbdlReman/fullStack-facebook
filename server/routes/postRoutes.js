const express = require('express');
const { createPosts, getPosts, likes, findSinglePost, sharePost } = require('../controllers/postController');
const extract = require('../middlewares/extractToken');
const router = express.Router();

router.post('/create-post', createPosts);
router.get('/get-posts', getPosts)
router.post('/like-post', likes)
router.get('/get-single-post', findSinglePost)
router.post('/share-post', sharePost)


module.exports = router