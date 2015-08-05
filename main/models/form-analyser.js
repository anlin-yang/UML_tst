function FormAnalyser() {}

FormAnalyser.prototype.formSerializer = function(form) {
  var result = [];

  [].forEach.call(form, function(elem) {
    var isExist;
    isExist = result.some(function(val) {
      return val.name === elem.name;
    });

    switch (elem.type) {
      case 'text':
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
