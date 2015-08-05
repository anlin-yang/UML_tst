function FormAnalyser() {

}

FormAnalyser.prototype.formSerializer = function(form) {
  var result = [];
  var tempp = {};

  [].forEach.call(form, function(elem) {
    var isExist;
    switch (elem.type) {
      case 'text':
        isExist = result.some(function(val) {
          return val.name === elem.name;
        });
        if (isExist) {
          var temp2 = result.filter(function(item) {
            return item.name === elem.name;
          });
          temp2[0].value.push(elem.value);
        } else {
          result.push({
            name: elem.name,
            type: elem.type,
            value: [elem.value]
          });
        }

        break;
      case 'radio':
        isExist = result.some(function(val) {
          return val.name === elem.name;
        });
        if (isExist === false) {
          if (elem.checked === true) {
            result.push({
              name: elem.name,
              type: elem.type,
              value: elem.value
            });
          }
        }
        break;
      case 'checkbox':
        isExist = result.some(function(val) {
          return val.name === elem.name;
        });
        if (isExist) {
          if (elem.checked === true) {
            var temp3 = result.filter(function(item) {
              return item.name === elem.name;
            });
            temp3[0].value += elem.value;
          }
        } else {
          if (elem.checked === true) {
            result.push({
              name: elem.name,
              type: elem.type,
              value: elem.value
            });
          }
        }
        break;
    }
  });
  return result;
};
