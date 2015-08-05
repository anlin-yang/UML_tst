describe("MultipleBlank Test", function() {
  var theMutipleBlank;
  var temp;
  beforeEach(function() {
    temp = [{
      name: 'test-1-1',
      value: ["杨林","杨森","森林",]
    },{
      name: 'test-1-2',
      value: ["杨木","木易","木木",]
    }];
    theMutipleBlank = new MutipleBlank();

    theMutipleBlank.setMutipleBlank(temp);
  });

  it("should return corrent result.", function() {
    var answer = {
      name: 'test-1-1',
      value: ["森林","杨林","好好3",]
    };
    expect(theMutipleBlank.mutipleBlankMatch(answer)).toBe(2);

  });
});
