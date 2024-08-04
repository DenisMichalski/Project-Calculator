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

// console.log(add(2, 3));
// console.log(subtract(10, 4));
// console.log(multiply(5, 4));
// console.log(divide(50, 10));


let firstNumber;
let secondNumber;
let operator = [add, subtract, multiply, divide];


function operate() {
    if (operator === add) {
        firstNumber += secondNumber;
    } else if (operator === subtract) {
        return firstNumber -= secondNumber;
    } else if (operator === multiply) {
        return firstNumber *= secondNumber;
    } else {
        return firstNumber /= secondNumber;
    }
}