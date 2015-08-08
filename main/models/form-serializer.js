function FormAnalyser() {
  this.questionList = [];
}

FormAnalyser.prototype._getValue = function(element) {
  var result = [];
  element.forEach(function(val) {
    result.push(val.value);
  });
  return result;
};

FormAnalyser.prototype.formSerializer = function(form) {
  //var result = [];
  var realAnswer = new RealAnswer();
  var inputs = [].slice.call(form.getElementsByTagName('input'), 0);

  var group = inputs.filter(function(elem) {
    return ((elem.type === 'radio' && elem.checked === false) || (elem.type === 'checkbox' && elem.checked === false)) ? 0 : 1;
  }).reduce(function(prev, next) {
    var key = [next.name];
    prev[key] = prev[key] || [];
    prev[key].push(next);
    return prev;
  }, {});

  for (var elem in group) {
    var question = new Question(elem, group[elem][0].type, this._getValue(group[elem]), realAnswer.getRealAnswer(elem), realAnswer.getAnswerScore(elem));
    this.questionList.push(question);
  }
  //return result;
  // var result = {};
  // inputs.filter(function(input) {
  //   return ((elem.type === 'radio' && elem.checked === true) || (elem.type === 'checkbox' && elem.checked === true));
  // }).forEach(function(input) {
  //   var key = input.name;
  //   result[key] = result[key] || [];
  //   result[key].push(input);
  // });
  //
  // for (input in result) {
  //
  // }
};

FormAnalyser.prototype.getFinalScore = function() {
  var finalScore = 0;
  this.questionList.forEach(function(val) {
    finalScore += val.getScore();
  });
  return finalScore;
};
