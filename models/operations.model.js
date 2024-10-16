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

// todo - create schema as such to store the operands in a array instead of input1 and input2 as said by Aakash sir


const Operation = mongoose.model('Operations', operationSchema);

module.exports = Operation;