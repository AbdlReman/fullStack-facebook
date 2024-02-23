const AsyncHandler = require('express-async-handler');
const Story = require('../models/storyModel');

const createStory = AsyncHandler(async (req,res)=>{
    const {image ,user_id,caption}= req.body;
    try {
        const createdStory = await Story.create({
            user_id, image ,caption
        });
        res.send(createdStory)
    } catch (error) {
        throw new Error(error);
    }

})
module.exports={
    createStory
}