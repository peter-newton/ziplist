/* eslint-env mocha, chai */
/* global zipList, zipListTheSimpleWay, chai */

describe('zipList', function () {
  const testNums = [1, 2, 3];
  const testLet = ['a', 'b', 'c'];
  describe('zipping two test arrays', function () {
    it('should return a single array with six elements', function () {
      chai.expect(zipList(testNums, testLet)).to.have.lengthOf(6);
    });
    it('should deep equal the passed six element array', function () {
      chai.expect(zipList(testNums, testLet)).to.deep.equal(zipList(testNums, testLet));
    });
  });
});

describe('zipListTheSimpleWay', function () {
  const testNums = [1, 2, 3];
  const testLet = ['a', 'b', 'c'];
  describe('zipping two test arrays', function () {
    it('should return a single array with six elements', function () {
      chai.expect(zipListTheSimpleWay(testNums, testLet)).to.have.lengthOf(6);
    });
    it('should deep equal the passed six element array', function () {
      chai.expect(zipListTheSimpleWay(testNums, testLet)).to.deep.equal(zipList(testNums, testLet));
    });
  });
});
