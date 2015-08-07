function SingleBlank() {
  this.answer = [];
}

SingleBlank.prototype.setSingleBlank = function(singleBlankAnswer) {
  this.answer = singleBlankAnswer;
};

SingleBlank.prototype.caculateScore = function(singleBlankAnswer) {
  var realScore = 0;
  var isTrue = 0;
  this.answer.forEach(function(item) {
    if (item.name === singleBlankAnswer.name) {
      if (item.value[0] === singleBlankAnswer.value[0]) {
        isTrue = 1;
      }
      if (isTrue) {
        realScore = item.score;
      }
    }
  });
  return realScore;
};
