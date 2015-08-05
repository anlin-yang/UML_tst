describe("singleBlank Test", function() {
  var theSingleBlank;
var temp;
  beforeEach(function() {
    temp = [{name:'test-1-1',value:"你好"},{name:'test-1-2',value:"你好"}];
    theSingleBlank = new SingleBlank();

    theSingleBlank.setSingleBlank(temp);
  });

  afterEach(function() {

  });

  it("should return corrent result.", function() {

    var answer = {name:"test-1-1",value:"你好"};
    expect(theSingleBlank.singleBlankMatch(answer)).toBe(true);
  });
});
