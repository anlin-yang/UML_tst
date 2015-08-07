describe("BlankChecker Test", function() {
  var theBlankChecker;
  var realAnswer;
  beforeEach(function() {
    realAnswer = [{
      name: 'test-1-1',
      value: ["杨林"],
      score: 3
    }, {
      name: 'test-1-2',
      value: ["杨木", "木易", "木木"],
      score: 3
    }];
    theBlankChecker = new BlankChecker();
    theBlankChecker.setRealAnswer(realAnswer);
  });

  it("test singleBlank : should return full score or error.", function() {
    var answer = {
      name: 'test-1-1',
      value: ["杨林"]
    };
    var answer2 = {
      name: 'test-1-1',
      value: ["杨"]
    };
    expect(theBlankChecker.caculateScore(answer)).toBe(3);
    expect(theBlankChecker.caculateScore(answer2)).toBe(0);
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
    expect(theBlankChecker.caculateScore(answer)).toBe(2);
    expect(theBlankChecker.caculateScore(answer2)).toBe(1);
    expect(theBlankChecker.caculateScore(answer3)).toBe(3);
    expect(theBlankChecker.caculateScore(answer4)).toBe(0);
  });
});
