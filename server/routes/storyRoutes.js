const express = require('express');
const { createStory } = require('../controllers/storyController');
const router = express.Router();

router.post('/create-story', createStory);



module.exports = router