function ChoiceChecker() {}

ChoiceChecker.prototype.caculateScore = function(writeAnswer, realAnswer, answerScore) {
  var isExist = 0;
  var correctNum = 0;
  var error = 0;
  var realScore = 0;

  realScore = answerScore;
  writeAnswer.forEach(function(val) {
    isExist = realAnswer.some(function(item) {
      return item === val;
    });
    if (isExist) {
      correctNum++;
    } else {
      error = 1;
    }
    isExist = 0;
  });

  if (error === 1) {
    realScore = 0;
  } else {
    if (correctNum !== realAnswer.length) {
      realScore = realScore / 2;
    }
  }
  return realScore;
};
