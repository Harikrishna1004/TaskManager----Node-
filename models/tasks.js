const mongoose = require('mongoose');

const tasks = mongoose.Schema({

    tasks: {
        type: String,
        required: [true, "Please enter a task"],
        maxlength: 50,
    },
    completed: {
        type: Boolean,
        default: false,
    },
}, {
    timestamp: true
})

module.exports = mongoose.model('Tasks', tasks);