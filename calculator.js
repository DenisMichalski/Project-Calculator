// DOM-ELEMENTS
const display = document.querySelector("display");
const numberButtons = document.querySelectorAll(".numberButton");

// FUNCTIONS FOR CALULATIONS
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

// VARIABLES TO UPDATE ON DISPLAY

let firstNumber = "";
let operator = "";
let secondNumber = "";

// FUNCTION FOR MATHEMATICAL OPERATIONS
function operate(num1, num2, operator) {
  switch (operator) {
    case "+":
      return add(num1, num2);
      break;
    case "-":
      return subtract(num1, num2);
      break;
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
  }
}

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    console.log('clicked');
  });
})

