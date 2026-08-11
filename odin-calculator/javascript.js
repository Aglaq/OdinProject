// Basic math functions
let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

function operate(firstNum, secondNum, ope) {
    if (ope == "+") {
        return add(firstNum, secondNum);
    } else if (ope == "-") {
        return subtract(firstNum, secondNum);
    } else if (ope == "*") {
        return multiply(firstNum, secondNum);
    } else if (ope == "/") {
        return divide(firstNum, secondNum);
    };
};

function reset() {
    firstNumber = 0;
    secondNumber = 0;
    operator = "";
    result = 0;
    calculate();
}

function calculate() {

    let firstNumber = 0;
    let secondNumber = 0;
    let operator = "";
    let result = 0;

    const display = document.getElementById("display");
    display.textContent = "0";

    const button_one = document.getElementById("button_one")
    button_one.addEventListener("click", () => {
        if (operator == "") {
            if (firstNumber == 0) {
                firstNumber = 1;
                display.textContent = firstNumber;
            } else {
                firstNumber = firstNumber.toString() + "1";
                display.textContent = firstNumber;
            };
        }
        else {
            if (secondNumber == 0) {
                secondNumber = 1;
                display.textContent = secondNumber;
            } else {
                secondNumber = secondNumber.toString() + "1";
                display.textContent = secondNumber;
            };
        };
    });
    const button_two = document.getElementById("button_two")
    button_two.addEventListener("click", () => {
        if (operator == "") {
            if (firstNumber == 0) {
                firstNumber = 2;
                display.textContent = firstNumber;
            } else {
                firstNumber = firstNumber.toString() + "2";
                display.textContent = firstNumber;
            };
        }
        else {
            if (secondNumber == 0) {
                secondNumber = 2;
                display.textContent = secondNumber;
            } else {
                secondNumber = secondNumber.toString() + "2";
                display.textContent = secondNumber;
            };
        };
    });

    const button_plus = document.getElementById("button_plus")
    button_plus.addEventListener("click", () => {
        operator = "+";
        firstNumber = operate(parseInt(firstNumber), parseInt(secondNumber), operator);
        secondNumber = 0;
        display.textContent = firstNumber;
    });

    const button_equal = document.getElementById("button_equal")
    button_equal.addEventListener("click", () => {
        display.textContent = operate(parseInt(firstNumber), parseInt(secondNumber), operator);
    });
}

calculate();

// const button_one = document.querySelector("button_one")
// button_one.addEventListener("click", display());

// result =
//     console.log(operate(5, 56, "+"));