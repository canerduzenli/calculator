//calculator buttons call three functions: appendToDisplay, calculate, and clearDisplay.

let inputStr = '';
// takes a value as an argument 

function appendToDisplay(value) {
  inputStr += value;
  document.getElementById('result').value = inputStr;
}
//calculate function use  eval function to evaluate  input string as a mathematical expression and store  result in a variable named result.
function calculate() {
  const result = eval(inputStr);
  document.getElementById('result').value = result;
  inputStr = '';
}
//clearDisplay function resets the input string to an empty string and sets the value of the calculator display to "0"

function clearDisplay() {
  inputStr = '';
  document.getElementById('result').value = '0';
}


