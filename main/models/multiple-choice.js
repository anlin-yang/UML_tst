function MultipleChoice() {
  this.answer = [];
}
MultipleChoice.prototype.mutipleChoiceMatch = function(mutipleChoiceanswer) {
  var isExist = 0;
  var correctNum = 0;
  var error = 0;
  var realScore = 0;
  var answerNum = 0;

  this.answer.forEach(function(val) {
    if (val.name === mutipleChoiceanswer.name) {
      realScore = val.score;
      answerNum = val.value.length;
      mutipleChoiceanswer.value.forEach(function(elem) {
        isExist = val.value.some(function(item) {
          return item === elem;
        });
        if (isExist) {
          correctNum++;
        } else {
          error = 1;
        }
        isExist = 0;
      });
    }
  });
  if (error === 1) {
    realScore = 0;
  } else {
    if (correctNum === answerNum) {

    } else {
      realScore = realScore / 2;
    }
  }
  return realScore;
};

MultipleChoice.prototype.setMultipleChoice = function(mutipleChoiceAnswer) {
  this.answer = mutipleChoiceAnswer;
};
