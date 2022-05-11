// callback functions for specific routes

const express = require('express');
const router = express.Router();
const dbController = require('./dbController');
const mongoose = require('mongoose');
const TestCase = mongoose.model("TestCase", dbController.schema);

/* GET homepage */
router.get('/', (res, req, next) => {
    res.render('index', { title: "Home Page"})
});

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

averageHomework = (homework1, homework2, homework3) => {
    var total = +homework1 + +homework2 + +homework3;
    var average = total / 3;
    return average;
}

averageTest = (test1, test2) => {
    var total = +test1 + +test2;
    var average = total / 2;
    return average;
}

getAssignmentWeight = (homework1, homework2, homework3) => {
    var average = averageHomework(homework1, homework2, homework3);

    var weightedPercent = 0.2 * average;
    return weightedPercent;
}
getTestWeight = (test1, test2) => {
    var average = averageTest(test1, test2);

    var weightedPercent = 0.8 * average;
    return weightedPercent;
}

getFinalGrade = (homework1, homework2, homework3, test1, test2) => {
    var testPercent = getTestWeight(test1, test2);
    var assignmentPercent = getAssignmentWeight(homework1, homework2, homework3);

    if((testPercent >= 0) && (assignmentPercent >= 0)) {
        return Math.round(testPercent + assignmentPercent);
    }
}

printFinalGrade = (grade) => {
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

router.showTestCases = (req, res) => {
    TestCase.find({})
        .exec()
        .then((test) => {
            res.render("displayTests", {
                test: test
            });
        })
};

router.addTestForm = (req, res) => {
    i++;
    var newtestcaseTitle = `Test Case ${i}`;
    var newtestcaseTest1 = req.body.test1;
    var newtestcaseTest2 = req.body.test2;
    var newtestcaseHomework1 = req.body.homework1;
    var newtestcaseHomework2 = req.body.homework2;
    var newtestcaseHomework3 = req.body.homework3;
    var newtestcaseFinalGrade = getFinalGrade(
        req.body.homework1, req.body.homework2, req.body.homework3, req.body.test1, req.body.test2
    );
    var newtestcaseLetterGrade = printFinalGrade(newtestcaseFinalGrade);


/*
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

*/

    TestCase.create(
        {
            testCaseTitle: newtestcaseTitle,
            test1: newtestcaseTest1,
            test2: newtestcaseTest2,
            homework1: newtestcaseHomework1,
            homework2: newtestcaseHomework2,
            homework3: newtestcaseHomework3,
            finalGrade: newtestcaseFinalGrade,
            letterGrade: newtestcaseLetterGrade
        },
        function (error, savedDocument) {
            if (error) console.log(error);
            console.log(savedDocument);
        }
    );


    res.render("addTest", {
        allTestCases: testCase
    });
};

router.getNewTestCase = (req, res) => {
    res.render("addTest", {
        title: "New Test Case"
    });
};




module.exports = router;
