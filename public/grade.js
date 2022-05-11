function averageHomework(homework1, homework2, homework3) {
    var total = +homework1 + +homework2 + +homework3;
    var average = total / 3;
    return average;
}

function averageTest(test1, test2) {
    var total = +test1 + +test2;
    var average = total / 2;
    return average;
}

function getAssignmentWeight(homework1, homework2, homework3) {
    var average = averageHomework(homework1, homework2, homework3);

    var weightedPercent = 0.2 * average;
    return weightedPercent;
}
function getTestWeight(test1, test2) {
    var average = averageTest(test1, test2);

    var weightedPercent = 0.8 * average;
    return weightedPercent;
}

function getFinalGrade(homework1, homework2, homework3, test1, test2) {
    var testPercent = getTestWeight(test1, test2);
    var assignmentPercent = getAssignmentWeight(homework1, homework2, homework3);

    if((testPercent >= 0) && (assignmentPercent >= 0)) {
        return Math.round(testPercent + assignmentPercent);
    }
}

function printFinalGrade(grade) {
    var letterGrade;
    if (grade >= 93) {
        return letterGrade = 'A';
    }   else if (grade >= 90) {
        return letterGrade = 'A-';
    }   else if (grade >= 87) {
        return letterGrade = 'B+';
    }   else if (grade >= 83) {
        return letterGrade = 'B';
    }   else if (grade >= 80) {
        return letterGrade = 'B-';
    }   else if (grade >= 77) {
        return letterGrade = 'C+';
    }   else if (grade >= 73) {
        return letterGrade = 'C';
    }   else if (grade >= 70) {
        return letterGrade = 'C-';
    }   else if (grade >= 67) {
        return letterGrade = 'D+';
    }   else if (grade >= 63) {
        return letterGrade = 'D';
    }   else if (grade >= 60) {
        return letterGrade = 'D-';
    }   else {
        return letterGrade = 'F';
    }
};

function newTest() {

    var args = Array.prototype.slice.call(arguments);

    var g = getFinalGrade(args[0], args[1], args[2], args[3], args[4]);

    return g;

}

function letterGrade() {
    var args = Array.prototype.slice.call(arguments);
    var grade = getFinalGrade(args[0], args[1], args[2], args[3], args[4]);
    var letterGrade = printFinalGrade(grade);
    return letterGrade;
}

function addTest() {
    // Get all the incoming arguments to simulate a post request
    var args = Array.prototype.slice.call(arguments);

    var i = 1;
    let testCase = [
        {
            title: `Test Case ${i}`,
            test1: null,
            test2: null,
            homework1: null,
            homework2: null,
            homework3: null,
            finalgrade: null,
            lettergrade: null
        }
    ];

    i++;
    var newtestcaseTitle = `Test Case ${i}`;
    var newtestcaseTest1 = args[0];
    var newtestcaseTest2 = args[1];
    var newtestcaseHomework1 = args[2];
    var newtestcaseHomework2 = args[3];
    var newtestcaseHomework3 = args[4];
    var newtestcaseFinalGrade = getFinalGrade(
        args[2], args[3], args[4], args[0], args[1]
    );
    var newtestcaseLetterGrade = printFinalGrade(newtestcaseFinalGrade);

    testCase.push({
        title: newtestcaseTitle,
        test1: newtestcaseTest1,
        test2: newtestcaseTest2,
        homework1: newtestcaseHomework1,
        homework2: newtestcaseHomework2,
        homework3: newtestcaseHomework3,
        finalgrade: newtestcaseFinalGrade,
        lettergrade: newtestcaseLetterGrade
    });

    return testCase;

}

/*
function dbtest() {

    const mongoose = require("mongoose"),
        dbController = require("../controllers/dbController");


    mongoose.connect(
        "mongodb://localhost:27017/csc404_db",
        {useNewUrlParser: true}
    );

    const db = mongoose.connection;
    const TestCase = mongoose.model("TestCase", dbController.schema);


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
 */
