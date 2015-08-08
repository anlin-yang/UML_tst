function BlankChecker() {}

BlankChecker.prototype.caculateScore = function(writeAnswer, realAnswer, answerScore) {
  var isExist = 0;
  var correctNum = 0;
  var everyQuestionScore = 0;
  var groupTemp = {};
  var groupedAnswer = [];
  everyQuestionScore = answerScore / realAnswer.length;
  writeAnswer.forEach(function(val) {
    groupTemp[val] = groupTemp[val] || val;
  });
  for (var item in groupTemp) {
    groupedAnswer.push(item);
  }
  groupedAnswer.forEach(function(elem) {
    isExist = realAnswer.some(function(item) {
      return item === elem;
    });
    if (isExist) {
      correctNum++;
    }
    isExist = 0;
  });
  return correctNum * everyQuestionScore;
};
