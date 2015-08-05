function MultipleChoice() {
  this.answer = [];
}
MultipleChoice.prototype.mutipleChoiceMatch = function(mutipleChoiceanswer) {
  var isExist = 0;
  var correctNum = 0;
  var error = 0;
  var score = 0;
  var answerNum = 0;

  this.answer.forEach(function(val) {
    if (val.name === mutipleChoiceanswer.name) {
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
    score = 0;
  } else {
    if (correctNum === answerNum) {
      score = 5;
    } else {
      score = correctNum;
    }
  }
  return score;
};

MultipleChoice.prototype.setMultipleChoice = function(mutipleChoiceAnswer) {
  this.answer = mutipleChoiceAnswer;
};
