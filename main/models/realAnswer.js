function RealAnswer() {
  this.realAnserList = [{
    name: "test-1-1",
    value: ["啊哈"],
    score: 3
  }, {
    name: "test-1-2",
    value: ["无哈", "哈哈", "呵呵"],
    score: 3
  }, {
    name: "test-2-1",
    value: ["A"],
    score: 3
  }, {
    name: "test-3-1",
    value: ["A", "B"],
    score: 3
  }, {
    name: "test-4-1",
    value: ["V"],
    score: 3
  }];
}

RealAnswer.prototype.getRealAnswer = function(questionName) {
  var finalAnswer = this.realAnserList.filter(function(answer) {
    return answer.name === questionName;
  });
  return finalAnswer[0].value;
};
RealAnswer.prototype.getAnswerScore = function(questionName) {
  var finalAnswer = this.realAnserList.filter(function(answer) {
    return answer.name === questionName;
  });
  return finalAnswer[0].score;
};

RealAnswer.prototype.setRealAnswer = function(realAnswer) {
  this.realAnserList = realAnswer;
};
