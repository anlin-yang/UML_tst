describe("singleBlank Test", function() {
  var theSingleBlank;
  var temp;
  beforeEach(function() {
    temp = [{
      name: 'test-1-1',
      value: "你好"
    }, {
      name: 'test-1-2',
      value: "你好"
    }, {
      name: 'test-2-1',
      value: 'A'
    }];
    theSingleBlank = new SingleBlank();

    theSingleBlank.setSingleBlank(temp);
  });

  it("should return corrent result.", function() {
    var answer = {
      name: "test-1-1",
      value: "你好"
    };
    var answer2 = {
      name: "test-1-2",
      value: "不好"
    };
    var answer3 = {
      name: "test-2-1",
      value: "A"
    };
    expect(theSingleBlank.singleBlankMatch(answer)).toBe(true);
    expect(theSingleBlank.singleBlankMatch(answer2)).toBe(false);
    expect(theSingleBlank.singleBlankMatch(answer3)).toBe(true);
  });
});
