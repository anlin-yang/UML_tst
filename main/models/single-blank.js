function SingleBlank() {
  this.answer = [];
}

SingleBlank.prototype.singleBlankMatch = function(singleBlankAnswer) {
  var isTrue = this.answer.some(function(val) {
    return val.value === singleBlankAnswer.value;
  });
  return isTrue;
};

SingleBlank.prototype.setSingleBlank = function(singleBlankAnswer) {
  this.answer = singleBlankAnswer;
};
