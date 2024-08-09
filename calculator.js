// DOM Elements
const calculatorDisplay = document.querySelector(".calculatorDisplay");
const numberButtons = document.querySelectorAll(".numberButton");
const operatorButtons = document.querySelectorAll(".operatorButton");
const decimalButton = document.querySelector(".decimalButton");
const clearButton = document.querySelector(".clearButton");
const equalsButton = document.querySelector(".equalsButton");
const backspaceButton = document.querySelector(".backspaceButton");

// FUNCTIONS FOR CALCULATIONS
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
  if (b === 0) {
    return "Cannot divide by 0"; // Snarky error message
  }
  return a / b;
}

// VARIABLES TO UPDATE THE DISPLAY
let firstNumber = "";
let operator = "";
let secondNumber = "";
let displayValue = "0";

// FUNCTION FOR MATHEMATICAL OPERATIONS
function operate(num1, num2, operator) {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
    default:
      return "Error"; // Fallback for unknown operators
  }
}

// Update the display with the current value
function updateDisplay() {
  calculatorDisplay.textContent = displayValue;
}

// Input number and handle decimal point
function inputNumber(num) {
  if (displayValue === "0" || displayValue === "Cannot divide by 0") {
    displayValue = num.toString();
  } else {
    displayValue += num.toString();
  }
  updateDisplay();
}

// Handling number button clicks
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    inputNumber(button.textContent);
    
    if (!operator) {
      firstNumber = displayValue;
    } else {
      secondNumber = displayValue;
    }
  });
});

// Handling operator button clicks
operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (!firstNumber) return; // No operation if no first number is present

    if (operator && secondNumber) {
      firstNumber = operate(
        parseFloat(firstNumber),
        parseFloat(secondNumber),
        operator
      ).toString();
      displayValue = firstNumber;
      secondNumber = "";
    }
    
    operator = button.textContent; // Set the operator
    displayValue = "0"; // Reset display value for new input
    updateDisplay();
  });
});

// Handling equals button click
equalsButton.addEventListener("click", () => {
  if (!firstNumber || !operator || !secondNumber) {
    displayValue = "Incomplete";
  } else {
    let result = operate(
      parseFloat(firstNumber),
      parseFloat(secondNumber),
      operator
    );

    if (typeof result === "string") {
      displayValue = result; // Display error message
    } else {
      result = Math.round((result + Number.EPSILON) * 100) / 100; // Rounds to 2 decimal places
      displayValue = result.toString();
      firstNumber = displayValue;
      operator = "";
      secondNumber = "";
    }
  }
  updateDisplay();
});

// Handling decimal button click
decimalButton.addEventListener("click", () => {
  if (!displayValue.includes('.')) {
    displayValue += '.';
    updateDisplay();
  }
});

// Handling clear button click
clearButton.addEventListener("click", () => {
  firstNumber = "";
  operator = "";
  secondNumber = "";
  displayValue = "0";
  updateDisplay();
});

// Handling backspace button click
backspaceButton.addEventListener("click", () => {
  if (displayValue === "Cannot divide by 0") {
    displayValue = "0";
  } else {
    displayValue = displayValue.slice(0, -1); // Remove last character
    if (displayValue === "") {
      displayValue = "0"; // Reset to 0 if display is empty
    }
  }
  updateDisplay();
});

// Keyboard support
document.addEventListener("keydown", (e) => {
  console.log(e.key); // Ausgabe der gedrückten Taste

  if (e.key >= '0' && e.key <= '9') {
    inputNumber(e.key);
  } else if (e.key === '.') {
    if (!displayValue.includes('.')) {
      displayValue += '.';
      updateDisplay();
    }
  } else if (['+', '-', '*', '/'].includes(e.key)) {
    if (firstNumber && operator && secondNumber) {
      firstNumber = operate(
        parseFloat(firstNumber),
        parseFloat(secondNumber),
        operator
      ).toString();
      secondNumber = "";
      displayValue = firstNumber;
    }
    operator = e.key;
    displayValue = "";
    updateDisplay();
  } else if (e.key === 'Enter') {
    console.log('Enter pressed');
    if (firstNumber && operator && secondNumber) {
      let result = operate(
        parseFloat(firstNumber),
        parseFloat(secondNumber),
        operator
      );

      if (typeof result === "string") {
        displayValue = result;
      } else {
        result = Math.round((result + Number.EPSILON) * 100) / 100;
        displayValue = result.toString();
        firstNumber = displayValue;
        operator = "";
        secondNumber = "";
      }
      updateDisplay();
    } else {
      displayValue = "Incomplete";
      updateDisplay();
    }
  } else if (e.key === 'Backspace') {
    if (displayValue === "Cannot divide by 0") {
      displayValue = "0";
    } else {
      displayValue = displayValue.slice(0, -1);
      if (displayValue === "") {
        displayValue = "0";
      }
    }
    updateDisplay();
  } else if (e.key === 'Escape') {
    firstNumber = "";
    operator = "";
    secondNumber = "";
    displayValue = "0";
    updateDisplay();
  }
});
