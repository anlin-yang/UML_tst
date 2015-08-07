describe("BlankChecker Test", function() {
  var theBlankChecker;
  beforeEach(function() {
    realAnswer = [{
      name: 'test-1-1',
      value: ["杨林"],
      score: 3
    }];
    realAnswer2 = [{
      name: 'test-1-2',
      value: ["杨木", "木易", "木木"],
      score: 3
    }];
    theBlankChecker = new BlankChecker();
  });

  it("test singleBlank : should return full score or error.", function() {
    var answer = {
      name: 'test-1-1',
      value: ["杨林"]
    };
    var answer2 = {
      name: 'test-1-1',
      value: ["杨木"]
    };
    expect(theBlankChecker.caculateScore(answer, realAnswer)).toBe(3);
    expect(theBlankChecker.caculateScore(answer2, realAnswer)).toBe(0);
  });

  it("test multipleBlank : should return partial score or full score or error.", function() {
    var answer = {
      name: 'test-1-2',
      value: ["木易", "杨木"]
    };
    var answer2 = {
      name: 'test-1-2',
      value: ["木易", "木易"]
    };
    var answer3 = {
      name: 'test-1-2',
      value: ["杨木", "木易", "木木"]
    };
    var answer4 = {
      name: 'test-1-2',
      value: ["阿哈"]
    };
    expect(theBlankChecker.caculateScore(answer, realAnswer2)).toBe(2);
    expect(theBlankChecker.caculateScore(answer2, realAnswer2)).toBe(1);
    expect(theBlankChecker.caculateScore(answer3, realAnswer2)).toBe(3);
    expect(theBlankChecker.caculateScore(answer4, realAnswer2)).toBe(0);
  });
});
