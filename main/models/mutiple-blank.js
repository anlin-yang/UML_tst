function mutipleBlank() {
  this.answer = [];
}

mutipleBlank.prototype.match = function(mutipleBlankAnswer) {
  var isTrue = 0;
  var isExist = 0;
  var correctNum = 0;
  this.answer.forEach(function(val) {
    if (val.name === mutipleBlankAnswer.name) {
      mutipleBlankAnswer.value.forEach(function(elem) {
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
  return isTrue;
};

mutipleBlank.setMutipleBlank = function(MutipleBlankAnswer) {
  this.answer = MutipleBlankAnswer;
};
