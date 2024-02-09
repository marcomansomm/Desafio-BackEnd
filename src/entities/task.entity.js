const { Schema, model } = require('mongoose');

const taskSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    priority: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
});

const Task = model('Task', taskSchema);
module.exports = Task;