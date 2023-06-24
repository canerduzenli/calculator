let inputStr = '';

function updateDisplay() {
  document.getElementById('result').value = inputStr;
}

function appendToDisplay(value) {
  if (!isNaN(value)) { //if it's a number, add it to the string
    inputStr += value;
  } else if (value === '.' && !inputStr.split(/[+\-*/]/).pop().includes('.')) { // if it's a dot and there's not already a dot in the string
    inputStr += value;
  } else if (['+', '-', '*', '/'].includes(value) && !['+', '-', '*', '/'].includes(inputStr.slice(-1))) { // if it's an operator and the last character in the string is not an operator
    inputStr += value;
  }
  updateDisplay();
}
;



function calculate() {
  try {
    const result = eval(inputStr);
    if (!isFinite(result)) {
      throw new Error('Division by zero.');
    }
    inputStr = result.toString();
  } catch (error) {
    alert('Invalid input: ' + error.message);
    inputStr = '';
  }
  updateDisplay();
}

function clearDisplay() {
  inputStr = '';
  updateDisplay();
}
function clearDisplay() {
  inputStr = '';
  document.getElementById('result').value = '0';
}
