function BlankChecker() {}

BlankChecker.prototype.caculateScore = function(writeAnswer, realAnswer) {
  var isExist = 0;
  var correctNum = 0;
  var realScore = 0;
  var groupTemp = {};
  var groupedArr = [];
  writeAnswer.value.forEach(function(val) {
    groupTemp[val] = groupTemp[val] || val;
  });
  for (var item in groupTemp) {
    groupedArr.push(item);
  }

  realAnswer.forEach(function(val) {
    if (val.name === writeAnswer.name) {
      realScore = val.score / val.value.length;
      groupedArr.forEach(function(elem) {
        isExist = val.value.some(function(item) {
          return item === elem;
        });
        if (isExist) {
          correctNum++;
        }
        isExist = 0;
      });
    }
  });
  return correctNum * realScore;
};
