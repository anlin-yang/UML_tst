function ChoiceChecker() {}

ChoiceChecker.prototype.caculateScore = function(writeAnswer, realAnswer) {
  var isExist = 0;
  var correctNum = 0;
  var error = 0;
  var realScore = 0;
  var answerNum = 0;

  realAnswer.forEach(function(val) {
    if (val.name === writeAnswer.name) {
      realScore = val.score;
      answerNum = val.value.length;
      writeAnswer.value.forEach(function(elem) {
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
