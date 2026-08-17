// Basic math functions
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => (b === 0 ? "ERROR" : a / b);

// Counting
function operate(firstNum, secondNum, ope) {
  if (ope == "+") {
    return add(firstNum, secondNum);
  } else if (ope == "-") {
    return subtract(firstNum, secondNum);
  } else if (ope == "*") {
    return multiply(firstNum, secondNum);
  } else if (ope == "/") {
    return divide(firstNum, secondNum);
  }
}

// Clear function
function clear() {
  firstNumber = 0;
  secondNumber = NaN;
  operator = "";
  const display = document.getElementById("display");
  display.textContent = Number(Number(firstNumber).toFixed(5));
}

function numberButtonClick(num) {
  if (operator == "") {
    if (firstNumber == 0) {
      firstNumber = num;
    } else {
      firstNumber = firstNumber.toString() + `${num}`;
    }
    display.textContent = Number(Number(firstNumber).toFixed(5));
  } else {
    if (Number.isNaN(secondNumber) || secondNumber == 0) {
      secondNumber = num;
    } else {
      secondNumber = secondNumber.toString() + `${num}`;
    }
    display.textContent = Number(Number(secondNumber).toFixed(5));
  }
}

function signButtonClick(sign) {
  if (Number.isNaN(secondNumber)) {
    display.textContent = Number(Number(firstNumber).toFixed(5));
    operator = sign;
  } else {
    firstNumber = operate(
      parseInt(firstNumber),
      parseInt(secondNumber),
      operator,
    );
    display.textContent = Number(Number(firstNumber).toFixed(5));
    operator = sign;
    secondNumber = NaN;
  }
}

// Clear button
const button_clear = document.getElementById("button_clear");
button_clear.addEventListener("click", () => {
  clear();
});

// Number buttons
const button_zero = document.getElementById("button_zero");
button_zero.addEventListener("click", () => {
  numberButtonClick(0);
});
const button_one = document.getElementById("button_one");
button_one.addEventListener("click", () => {
  numberButtonClick(1);
});
const button_two = document.getElementById("button_two");
button_two.addEventListener("click", () => {
  numberButtonClick(2);
});
const button_three = document.getElementById("button_three");
button_three.addEventListener("click", () => {
  numberButtonClick(3);
});
const button_four = document.getElementById("button_four");
button_four.addEventListener("click", () => {
  numberButtonClick(4);
});
const button_five = document.getElementById("button_five");
button_five.addEventListener("click", () => {
  numberButtonClick(5);
});
const button_six = document.getElementById("button_six");
button_six.addEventListener("click", () => {
  numberButtonClick(6);
});
const button_seven = document.getElementById("button_seven");
button_seven.addEventListener("click", () => {
  numberButtonClick(7);
});
const button_eight = document.getElementById("button_eight");
button_eight.addEventListener("click", () => {
  numberButtonClick(8);
});
const button_nine = document.getElementById("button_nine");
button_nine.addEventListener("click", () => {
  numberButtonClick(9);
});

// Sign buttons for opearator
const button_plus = document.getElementById("button_plus");
button_plus.addEventListener("click", () => {
  signButtonClick("+");
});
const button_minus = document.getElementById("button_minus");
button_minus.addEventListener("click", () => {
  signButtonClick("-");
});
const button_asterix = document.getElementById("button_asterix");
button_asterix.addEventListener("click", () => {
  signButtonClick("*");
});
const button_slash = document.getElementById("button_slash");
button_slash.addEventListener("click", () => {
  signButtonClick("/");
});

// Equal button
const button_equal = document.getElementById("button_equal");
button_equal.addEventListener("click", () => {
  if (Number.isNaN(secondNumber)) {
    secondNumber = 0;
    operator = "+";
  }
  firstNumber = operate(
    parseInt(firstNumber),
    parseInt(secondNumber),
    operator,
  );
  display.textContent = Number(Number(firstNumber).toFixed(5));
  secondNumber = NaN;
});

clear();
