const mongoose = require("mongoose"),
    dbController = require("../controllers/dbController");


mongoose.connect(
    "mongodb://localhost:27017/csc404_db",
    {useNewUrlParser: true}
);

const db = mongoose.connection;
TestCase = mongoose.model("TestCase", dbController.schema);

function dbtest() {
    var args = Array.prototype.slice.call(arguments);

    TestCase.create(
        {
            testCaseTitle: args[0],
            test1: args[1],
            test2: args[2],
            homework1: args[3],
            homework2: args[4],
            homework3: args[5],
            finalGrade: args[6],
            letterGrade: args[7]
        },
        function (error, savedDocument) {
            if (error) console.log(error);
            console.log(savedDocument);
        })

    return 1;
}
