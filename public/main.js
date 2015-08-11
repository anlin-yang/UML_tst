document.getElementById('test_name').addEventListener("keydown", function(evt) {
  if (evt.keyCode < 8 || (evt.keyCode > 8 && evt.keyCode < 48) || evt.keyCode > 57) {
    evt.preventDefault();
  }
});

var singleQuestion1 = document.getElementsByName('Q-2-1');
Array.prototype.forEach.call(singleQuestion1, function(elem) {
  elem.addEventListener('click', function(evt) {
    document.getElementsByClassName('Q-2-1-label-1')[0].innerHTML = elem.value;
  });
});

var singleQuestion2 = document.getElementsByName('Q-2-2');
Array.prototype.forEach.call(singleQuestion2, function(elem) {
  elem.addEventListener('click', function(evt) {
    document.getElementsByClassName('Q-2-2-label-1')[0].innerHTML = elem.value;
  });
});

var multiQuestion1 = document.getElementsByName("Q-3-1");

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
    document.getElementsByClassName('Q-3-1-label-1')[0].innerHTML = getResult();
  });
});

var multiQuestion2 = document.getElementsByName("Q-3-2");

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
    document.getElementsByClassName('Q-3-2-label-1')[0].innerHTML = getResult2();
  });
});

var trueOrFalse1 = document.getElementsByName("Q-4-1");
[].forEach.call(trueOrFalse1, function(elem) {
  elem.addEventListener('click', function(evt) {
    document.getElementsByClassName('Q-4-1-label-1')[0].innerHTML = elem.value;
  });
});

var trueOrFalse2 = document.getElementsByName("Q-4-2");
[].forEach.call(trueOrFalse2, function(elem) {
  elem.addEventListener('click', function(evt) {
    document.getElementsByClassName('Q-4-2-label-1')[0].innerHTML = elem.value;
  });
});

var commitBtn = document.getElementById('commitBtn');
commitBtn.addEventListener('click', function(evt) {

  var form = document.getElementsByTagName('form')[0];
  var theFormAnalyser = new FormAnalyser();
  var result = theFormAnalyser.formSerializer(form);
  var finalScore = theFormAnalyser.getFinalScore();
  document.getElementsByClassName('test_score')[0].value = finalScore;
    return alert(finalScore);
});
