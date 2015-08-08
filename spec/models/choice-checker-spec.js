describe("ChoiceChecker Test", function() {
  var theChoiceChecker;
  beforeEach(function() {
    realAnswer = ["A"];
    realAnswer2 = ["A", "B", "C"];
    realAnswer3 = ["X"];
    theChoiceChecker = new ChoiceChecker();
  });

  it("test singleChoice : should return full score or error", function() {
    var answer = ["A"];
    var answer2 = ["B"];
    expect(theChoiceChecker.caculateScore(answer, realAnswer, 4)).toBe(4);
    expect(theChoiceChecker.caculateScore(answer2, realAnswer, 4)).toBe(0);
  });

  it("test mutipleChoice : should return half-score or full score or error", function() {
    var answer = ["A", "C"];
    var answer2 = ["A", "B", "C"];
    var answer3 = ["A", "B", "D"];
    expect(theChoiceChecker.caculateScore(answer, realAnswer2, 4)).toBe(2);
    expect(theChoiceChecker.caculateScore(answer2, realAnswer2, 4)).toBe(4);
    expect(theChoiceChecker.caculateScore(answer3, realAnswer2, 4)).toBe(0);
  });

  it("test True-False : should return full score or error", function() {
    var answer = ["X"];
    var answer2 = ["V"];
    expect(theChoiceChecker.caculateScore(answer, realAnswer3, 4)).toBe(4);
    expect(theChoiceChecker.caculateScore(answer2, realAnswer3, 4)).toBe(0);
  });
});
