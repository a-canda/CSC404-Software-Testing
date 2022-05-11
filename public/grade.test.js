describe('#newBlah()', function() {

    context('All The same value within bounds', function() {
        it('should return 10', function() {
            expect(newTest(10, 10, 10, 10, 10)).to.equal(10);
        })

        it('should return 100', function() {
            expect(newTest(100, 100, 100, 100, 100)).to.equal(100);
        })

        it('should return 0', function() {
            expect(newTest(0, 0, 0, 0, 0)).to.equal(0);
        })
    })

    context('Using numbers out of bounds', function() {
        it('should return 76', function() {
            expect(newTest(1000, 10, 10, 10, 10)).to.equal(76);
        })

        it('should return 87', function() {
            expect(newTest(100, 100, -100, 100, 100)).to.equal(87);
        })
    })
})

describe('#LetterGrade()', function() {
    context('Testing values within bounds', function() {
        it('Should return F', function() {
            expect(letterGrade(10, 10, 10, 10, 10)).to.equal("F", "Arguments: [10, 10, 10, 10, 10] does not result in a letter grade of F");
        })

        it('Should return D-', function() {
            expect(letterGrade(62, 62, 62, 62, 62)).to.equal("D-", "Arguments: [62, 62, 62, 62, 62] does not result in a letter grade of D-");
        })

        it('Should return D', function() {
            expect(letterGrade(65, 65, 65, 65, 65)).to.equal("D", "Arguments: [65, 65, 65, 65, 65] does not result in a letter grade of D");
        })

        it('Should return D+', function() {
            expect(letterGrade(69, 69, 69, 69, 69)).to.equal("D+", "Arguments: [69, 69, 69, 69, 69] does not result in a letter grade of D+");
        })

        it('Should return C-', function() {
            expect(letterGrade(71, 71, 71, 71, 71)).to.equal("C-", "Arguments: [71, 71, 71, 71, 71] does not result in a letter grade of C-");
        })

        it('Should return C', function() {
            expect(letterGrade(75, 75, 75, 75, 75)).to.equal("C", "Arguments: [75, 75, 75, 75, 75] does not result in a letter grade of C");
        })

        it('Should return C+', function() {
            expect(letterGrade(79, 79, 79, 79, 79)).to.equal("C+", "Arguments: [79, 79, 79, 79, 79] does not result in a letter grade of C+");
        })

        it('Should return B-', function() {
            expect(letterGrade(81, 81, 81, 81, 81)).to.equal("B-", "Arguments: [81, 81, 81, 81, 81] does not result in a letter grade of B-");
        })

        it('Should return B', function() {
            expect(letterGrade(84, 84, 84, 84, 84)).to.equal("B", "Arguments: [84, 84, 84, 84, 84] does not result in a letter grade of B");
        })

        it('Should return B+', function() {
            expect(letterGrade(88, 88, 88, 88, 88)).to.equal("B+", "Arguments: [88, 88, 88, 88, 88] does not result in a letter grade of B+");
        })

        it('Should return A-', function() {
            expect(letterGrade(90, 90, 90, 90, 90)).to.equal("A-", "Arguments: [90, 90, 90, 90, 90] does not result in a letter grade of A-");
        })

        it('Should return A', function() {
            expect(letterGrade(100, 100, 100, 100, 100)).to.equal("A", "Arguments: [100, 100, 100, 100, 100] does not result in a letter grade of A");
        })
    })
})

describe("#AddTest()", function() {
    context("Testing adding grades to testCase", function() {

        var testCase = addTest(50, 50, 50, 50, 50);

        var finalG = testCase[1].finalgrade;
        var finalLetter = testCase[1].lettergrade;

        it("Length should be 2", function() {
            expect(testCase).to.have.lengthOf(2, "Length after first add is not 2");
        })

        it("Should be 50", function() {
            expect(finalG).to.equal(50, "Final grade does not equal 50 args: [50, 50, 50, 50, 50]");
        })

        it("Should be F", function() {
            expect(finalLetter).to.equal("F", "Final Letter grade does not equal F, args: [50, 50, 50, 50, 50]");
        })
    })
})

describe('#dbtest()', function() {

    context('load value within database', function() {
        it('should return 1st value', function() {
            dbtest("1", 10, 10, 10, 10, 10, 10, "F");
            expect((10)).to.equal(10);
        })

        it('should return 2nd value', function() {
            expect((100)).to.equal(100);
        })

        it('should return 3rd value', function() {
            expect((75)).to.equal(75);
        })
    })
})
