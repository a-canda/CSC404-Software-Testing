const mongoose = require("mongoose"),
testCaseSchema = new mongoose.Schema({
    testCaseTitle: {
        type: String,
        required: true
    },
    homework1: {
        type: Number,
        required: true,
        min: [0, "Must be a positive number"],
        max: 100
    },
    homework2: {
        type: Number,
        required: true,
        min: [0, "Must be a positive number"],
        max: 100
    },
    homework3: {
        type: Number,
        required: true,
        min: [0, "Must be a positive number"],
        max: 100
    },
    test1: {
        type: Number,
        required: true,
        min: [0, "Must be a positive number"],
        max: [100, "Value must be below 100"]
    },
    test2: {
        type: Number,
        required: true,
        min: [0, "Must be a positive number"],
        max: [100, "Value must be below 100"]
    },
    finalGrade: {
        type: Number,
        required: true
    },
    letterGrade: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model("TestCase", testCaseSchema);

