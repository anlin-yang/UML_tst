function StrategyFactory() {

}

StrategyFactory.prototype.getStrategy = function(type) {
  var checkerObj;
  switch (type) {
    case "text":
      checkerObj = new textChecker();
      break;
    case "radio":
    case "checkbox":
      checkerObj = new choiceChecker();
      break;
    case "textarea":
      checkerObj = new textAreaChecker();
  }
  return checkerObj;
};
