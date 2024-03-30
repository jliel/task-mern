const mongoose = require('mongoose');
const taskSchema = mongoose.Schema(
    {
        text: {type: String, required: [true, 'Please add a text value']},
        // references the user model to attach a user to a certain task
        user: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User'}
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Task', taskSchema)