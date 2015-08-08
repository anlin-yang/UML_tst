describe("BlankChecker Test", function() {
  var theBlankChecker;
  beforeEach(function() {
    realAnswer = ["杨林"];
    realAnswer2 = ["杨木", "木易", "木木"];
    theBlankChecker = new BlankChecker();
  });

  it("test singleBlank : should return full score or error.", function() {
    var answer = ["杨林"];
    var answer2 = ["杨木"];
    expect(theBlankChecker.caculateScore(answer, realAnswer, 3)).toBe(3);
    expect(theBlankChecker.caculateScore(answer2, realAnswer, 3)).toBe(0);
  });

  it("test multipleBlank : should return partial score or full score or error.", function() {
    var answer = ["木易", "杨木"];
    var answer2 = ["木易", "木易"];
    var answer3 = ["杨木", "木易", "木木"];
    var answer4 = ["阿哈"];
    expect(theBlankChecker.caculateScore(answer, realAnswer2, 3)).toBe(2);
    expect(theBlankChecker.caculateScore(answer2, realAnswer2, 3)).toBe(1);
    expect(theBlankChecker.caculateScore(answer3, realAnswer2, 3)).toBe(3);
    expect(theBlankChecker.caculateScore(answer4, realAnswer2, 3)).toBe(0);
  });
});
