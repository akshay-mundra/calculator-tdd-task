const mongoose = require('mongoose');

const operationSchema = new mongoose.Schema({
    input1: {
        type: Number,
        required: true,
    },
    input2: {
        type: Number,
        required: true,
    },
    operator: {
        type: String,
        enum: ['+', '-', '*', '/'],
        required: true,
    },
    result: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
});


const Operations = mongoose.model('Operations', operationSchema);

module.exports = Operations;