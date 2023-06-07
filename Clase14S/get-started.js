function onClick() {
  if (inputsAreEmpty()) {
    label.textContent = 'Error: Uno o los dos inputs están vacíos.';
    return;
  }
  updateLabel();
}
function inputsAreEmpty() {
  if (getNumber1() === '' || getNumber2() === '' || getNumber1() == isNaN || getNumber2() == isNaN) {
    return true;
  } else {
    return false;
  }
}
function updateLabel() {
  var addend1 = parseInt(getNumber1());
  var addend2 = parseInt(getNumber2());

  if (isNaN(addend1) || isNaN(addend2)) {
    return label.textContent = 'Error: Uno o los dos inputs no son números.';
  } else {
    var sum = addend1 + addend2;
    label.textContent = addend1 + ' + ' + addend2 + ' = ' + sum;

  }
}
function getNumber1() {
  return inputs[0].value;
}
function getNumber2() {
  return inputs[1].value;
}
var inputs = document.querySelectorAll('input');
var label = document.querySelector('p');
var button = document.querySelector('button');
button.addEventListener('click', onClick);
