function MutipleBlank() {
  this.answer = [];
}

MutipleBlank.prototype.mutipleBlankMatch = function(mutipleBlankAnswer) {
  var isExist = 0;
  var correctNum = 0;
  var realScore = 0;
  var groupTemp = {};
  var groupedArr = [];
  mutipleBlankAnswer.value.forEach(function(val) {
    groupTemp[val] = groupTemp[val] || val;
  });
  for (var item in groupTemp) {
    groupedArr.push(item);
  }

  this.answer.forEach(function(val) {
    if (val.name === mutipleBlankAnswer.name) {
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
MutipleBlank.prototype.setMutipleBlank = function(MutipleBlankAnswer) {
  this.answer = MutipleBlankAnswer;
};
