const mongoose = require('mongoose');

const storySchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required:true
    },
    image: {
        type: String,
        required: false
    },
    caption: {
        type: String,
        required: false
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('Story', storySchema);