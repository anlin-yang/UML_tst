function BlankChecker() {}

BlankChecker.prototype.caculateScore = function(writeAnswer, realAnswer, answerScore) {
  var isExist = 0;
  var correctNum = 0;
  var realScore = 0;
  var groupTemp = {};
  var groupedArr = [];
  writeAnswer.forEach(function(val) {
    groupTemp[val] = groupTemp[val] || val;
  });
  for (var item in groupTemp) {
    groupedArr.push(item);
  }

  realScore = answerScore / realAnswer.length;
  groupedArr.forEach(function(elem) {
    isExist = realAnswer.some(function(item) {
      return item === elem;
    });
    if (isExist) {
      correctNum++;
    }
    isExist = 0;
  });
  return correctNum * realScore;
};
