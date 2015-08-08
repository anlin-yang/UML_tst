function Question(name, type, writeAnswer, realAnswer, score) {
  this.name = name;
  this.type = type;
  this.writeAnswer = writeAnswer;
  this.realAnswer = realAnswer;
  this.score = score;
}

Question.prototype.getScore = function() {
  var score = 0;
  var strategyFactory = new StrategyFactory();
  var checkerObj = strategyFactory.getStrategyObj(this.type);
  score = checkerObj.caculateScore(this.writeAnswer, this.realAnswer, this.score);
  return score;
};
