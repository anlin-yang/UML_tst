function Question() {
  this.name = "";
  this.type = "";
  this.writeAnswer = "";
  this.realAnswer = "";
}

Question.prototype.getScore = function(writeAnswer, realAnswer) {
  var score = 0;
  var strategyFactory = new StrategyFactory(writeAnswer);
  var checkerObj = strategyFactory.getStrategyObj(this.type);
  score = checkerObj.caculateScore(this.writeAnswer, this.realAnswer);
  return score;
};
