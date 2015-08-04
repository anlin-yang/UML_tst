document.getElementById('test_name').addEventListener("keydown", function(evt) {
  if (evt.keyCode < 8 || (evt.keyCode > 8 && evt.keyCode < 48) || evt.keyCode > 57) {
    evt.preventDefault();
  }
});

var singleQuestion1 = document.getElementsByName('singleQuestion-1');
Array.prototype.forEach.call(singleQuestion1, function(elem) {
  elem.addEventListener('click', function(evt) {
    document.getElementsByClassName('singleQuestion1-label-1')[0].innerHTML = elem.value;
  });
});

var singleQuestion2 = document.getElementsByName('singleQuestion-2');
Array.prototype.forEach.call(singleQuestion2, function(elem) {
  elem.addEventListener('click', function(evt) {
    document.getElementsByClassName('singleQuestion2-label-1')[0].innerHTML = elem.value;
  });
});

var multiQuestion1 = document.getElementsByName("multiQuestion-1");

function getResult() {
  var result = [];
  result = [].filter.call(multiQuestion1, function(elem) {
    return elem.checked;
  }).map(function(elem) {
    return elem.value;
  });
  return result.join("");
}

[].forEach.call(multiQuestion1, function(elem) {
  elem.addEventListener("click", function() {
    document.getElementsByClassName('multiQuestion1-label-1')[0].innerHTML = getResult();
  });
});

var multiQuestion2 = document.getElementsByName("multiQuestion-2");

function getResult2() {
  var result = [];
  result = [].filter.call(multiQuestion2, function(elem) {
    return elem.checked;
  }).map(function(elem) {
    return elem.value;
  });
  return result.join("");
}

[].forEach.call(multiQuestion2, function(elem) {
  elem.addEventListener("click", function() {
    document.getElementsByClassName('multiQuestion2-label-1')[0].innerHTML = getResult2();
  });
});
