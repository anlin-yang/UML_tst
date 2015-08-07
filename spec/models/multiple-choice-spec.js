describe("MultipleChoice Test", function() {
  var theMutipleChoice;
  var temp;
  beforeEach(function() {
    temp = [{
      name: 'test-1-1',
      value: ["A","B","C"],
      score:2
    }];
    theMutipleChoice = new MultipleChoice();

    theMutipleChoice.setMultipleChoice(temp);
  });

  it("should return partial score.", function() {
    var answer = {
      name: 'test-1-1',
      value: ["A","C"]
    };
    expect(theMutipleChoice.caculateScore(answer)).toBe(1);
  });

  it("should return full score.", function() {
    var answer = {
      name: 'test-1-1',
      value: ["A","B","C"]
    };
    expect(theMutipleChoice.caculateScore(answer)).toBe(2);
  });
});
