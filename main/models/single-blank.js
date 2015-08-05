function SingleBlank() {
  this.answer = [];
}

SingleBlank.prototype.setSingleBlank = function(singleBlankAnswer) {
  this.answer = singleBlankAnswer;
};

SingleBlank.prototype.singleBlankMatch = function(singleBlankAnswer) {
  return this.answer.some(function(val) {
    return val.value === singleBlankAnswer.value;
  });
};
