function FormAnalyser() {}

FormAnalyser.prototype.formSerializer = function(form) {
  var result = [];
  [].forEach.call(form, function(elem) {
    if ((elem.type === 'radio' && elem.checked === true) || (elem.type === 'checkbox' && elem.checked === true)) {
      var isExist;
      isExist = result.some(function(val) {
        return val.name === elem.name;
      });
      if (isExist === false) {
        result.push({
          name: elem.name,
          type: elem.type,
          value: [elem.value]
        });
      } else {
        result.forEach(function(item) {
          if (item.name === elem.name) {
            item.value.push(elem.value);
          }
        });
      }
    }
  });
  return result;
};
