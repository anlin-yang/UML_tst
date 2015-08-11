function RealAnswer() {
  this.realAnserList = [{
    name: "Q-1-1",
    value: ["统一建模语言"],
    score: 1
  }, {
    name: "Q-1-2",
    value: ["封装性","继承性","多态性"],
    score: 3
  }, {
    name: "Q-2-1",
    value: ["D"],
    score: 2
  }, {
    name: "Q-2-2",
    value: ["C"],
    score: 2
  }, {
    name: "Q-3-1",
    value: ["A","B","D"],
    score: 2
  }, {
    name: "Q-3-2",
    value: ["A","B","C"],
    score: 2
  }, {
    name: "Q-4-1",
    value: ["X"],
    score: 2
  }, {
    name: "Q-4-2",
    value: ["V"],
    score: 2
  }, ];
  // this.realAnserList = [{
  //   name: "test-1-1",
  //   value: ["啊哈"],
  //   score: 3
  // }, {
  //   name: "test-1-2",
  //   value: ["无哈", "哈哈", "呵呵"],
  //   score: 3
  // }, {
  //   name: "test-2-1",
  //   value: ["A"],
  //   score: 3
  // }, {
  //   name: "test-3-1",
  //   value: ["A", "B"],
  //   score: 3
  // }, {
  //   name: "test-4-1",
  //   value: ["V"],
  //   score: 3
  // }];
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
