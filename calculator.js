// DOM-ELEMENTS
const calculatorDisplay = document.querySelector(".calculatorDisplay");
const numberButtons = document.querySelectorAll(".numberButton");
const operatorButton = document.querySelectorAll(".operatorButton");
const decimalButton = document.querySelector(".decimalButton");
const clearButton = document.querySelector(".clearButton");
const equalsButton = document.querySelector(".equalsButton");

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

// VARIABLES TO UPDATE THE DISPLAY

let firstNumber = "";
let operator = "";
let secondNumber = "";
let displayValue = "";

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

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    displayValue += button.textContent; // Add the number to displayValue
    updateDisplay(); // Update the display with the new value
  });
});

function updateDisplay() {
  calculatorDisplay.textContent = displayValue; // Update the actual display element
}

function inputNumber(num) {
  if (displayValue === '0') {
    displayValue = num.toString();
  } else {
    displayValue += num.toString();
  }
  updateDisplay();
}
