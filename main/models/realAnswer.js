function RealAnswer() {
  this.realAnserList = [];
}

RealAnswer.prototype.getRealAnswer = function(questionName) {
  return this.realAnserList.filter(function(answer) {
    return answer.name === questionName;
  });
};

RealAnswer.prototype.setRealAnswer = function(realAnswer) {
  this.realAnserList = realAnswer;
};
