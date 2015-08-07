describe("ChoiceChecker Test", function() {
  var theChoiceChecker;
  var realAnswer;
  beforeEach(function() {
    realAnswer = [{
      name: 'test-1-1',
      value: ["A", "B", "C"],
      score: 4
    }, {
      name: 'test-1-2',
      value: ["A"],
      score: 4
    }, {
      name: 'test-1-3',
      value: ["X"],
      score: 4
    }];
    theChoiceChecker = new ChoiceChecker();

    theChoiceChecker.setRealAnswer(realAnswer);
  });

  it("test mutipleChoice : should return half-score or full score or error", function() {
    var answer = {
      name: 'test-1-1',
      value: ["A", "C"]
    };
    var answer2 = {
      name: 'test-1-1',
      value: ["A", "B", "C"]
    };
    var answer3 = {
      name: 'test-1-1',
      value: ["A", "B", "D"]
    };
    expect(theChoiceChecker.caculateScore(answer)).toBe(2);
    expect(theChoiceChecker.caculateScore(answer2)).toBe(4);
    expect(theChoiceChecker.caculateScore(answer3)).toBe(0);
  });

  it("test singleChoice : should return full score or error", function() {
    var answer = {
      name: 'test-1-2',
      value: ["A"]
    };
    var answer2 = {
      name: 'test-1-2',
      value: ["B"]
    };
    expect(theChoiceChecker.caculateScore(answer)).toBe(4);
    expect(theChoiceChecker.caculateScore(answer2)).toBe(0);
  });

  it("test True-False : should return full score or error", function() {
    var answer = {
      name: 'test-1-3',
      value: ["X"]
    };
    var answer2 = {
      name: 'test-1-3',
      value: ["V"]
    };
    expect(theChoiceChecker.caculateScore(answer)).toBe(4);
    expect(theChoiceChecker.caculateScore(answer2)).toBe(0);
  });
});
