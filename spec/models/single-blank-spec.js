describe("singleBlank Test", function() {
  var theSingleBlank;
  var temp;
  beforeEach(function() {
    temp = [{
      name: 'test-1-1',
      value: ["你好"],
      score: 1
    }, {
      name: 'test-1-2',
      value: ["你好"],
      score: 1
    }, {
      name: 'test-2-1',
      value: ["A"],
      score: 2
    }];
    theSingleBlank = new SingleBlank();

    theSingleBlank.setSingleBlank(temp);
  });

  it("should return corrent result.", function() {
    var answer = {
      name: "test-1-1",
      value: ["你好"]
    };
    var answer2 = {
      name: "test-1-2",
      value: ["不好"]
    };
    var answer3 = {
      name: "test-2-1",
      value: ["A"]
    };
    expect(theSingleBlank.caculateScore(answer)).toBe(1);
    expect(theSingleBlank.caculateScore(answer2)).toBe(0);
    expect(theSingleBlank.caculateScore(answer3)).toBe(2);
  });
});
