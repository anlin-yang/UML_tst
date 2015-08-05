function singleChoice() {
  this.answer = [];
}

singleBlank.prototype.match = function(answer) {
  return answer.some(function(val) {
    return val.value === answer.value;
  });
};

singleBlank.setSingleChoice = function(singleChoiceAnswer) {
  this.answer = singleChoiceAnswer;
};
