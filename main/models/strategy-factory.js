function StrategyFactory() {

}

StrategyFactory.prototype.getStrategy = function(type) {
  var checkerObj;
  switch (type) {
    case "text":
      checkerObj = new BlankChecker();
      break;
    case "radio":
    case "checkbox":
      checkerObj = new ChoiceChecker();
      break;
    case "textarea":
      checkerObj = new ComprehensionChecker();
  }
  return checkerObj;
};
