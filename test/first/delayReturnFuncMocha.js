"use strict";

const delayReturnFunc = require("../../src/first/delayReturnFunc");
const expect = require("chai").expect;
const zurvan = require("zurvan");

describe("first test delayReturnFunc", function() {
    beforeEach(function() {
        return zurvan.interceptTimers();
    });
    afterEach(function() {
        return zurvan.releaseTimers();
    });

    it("should get result after call function 3 sec later, and cannot get result before 3 sec", function(done) {
        const secTimeWaitForDelay = 3;
        const returnedResult = "Jason Zhou";

        let actualResult;
        zurvan.advanceTime(2 * 1000)
            .then(function() {
                expect(actualResult).to.be.equal(undefined);
                zurvan.advanceTime(2 * 1000)
                    .then(function() {
                        expect(actualResult).to.be.equal(returnedResult);
                    }).then(done);
            });

        delayReturnFunc.delayReturn(secTimeWaitForDelay)
            .then(function(strData) {
                actualResult = strData;
            });
    });
});
