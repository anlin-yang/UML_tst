describe("MultipleChoice Test", function() {
  var theMutipleChoice;
  var temp;
  beforeEach(function() {
    temp = [{
      name: 'test-1-1',
      value: ["A","B","C"]
    }];
    theMutipleChoice = new MultipleChoice();

    theMutipleChoice.setMultipleChoice(temp);
  });

  it("should return corrent result.", function() {
    var answer = {
      name: 'test-1-1',
      value: ["A","B"]
    };
    expect(theMutipleChoice.mutipleChoiceMatch(answer)).toBe(2);
  });
});
