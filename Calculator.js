let display = document.querySelector("#display");
let numbers = document.querySelectorAll(".btn");
let operators = document.querySelectorAll(".operator");
let clearLastDisplay = document.querySelector("#keydelete");
let clearAllDisplay = document.querySelector("#cancel");
let equals = document.querySelector("#equals");

let displayValue = 0;
let operand1 = "";
let operand2 = "";
let operator = "";

function calculator() {
  numbers.forEach((number) => {
    number.addEventListener("click", (e) => {
      if (operator == "") {
        operand1 += e.target.innerText;
        display.textContent = operand1;
        displayValue = display.textContent;
        console.log(`op1: ${operand1}`);
      } else {
        operand2 += e.target.innerText;
        display.textContent = operand1 + operator + operand2;
        displayValue = operand1 + operator + operand2;
        console.log(`op2: ${operand2}`);
      }
      console.log(`dv 2:${displayValue}`);
    });
  });

  operators.forEach((operatorBtn) => {
    operatorBtn.addEventListener("click", (e) => {
      if (e.target.innerText !== "=") {
        operator = e.target.innerText;
        displayValue = operand1 + operator + operand2;
        display.textContent = displayValue;
        console.log(`dv :${displayValue}`);
      }
    });
  });

  equals.addEventListener("click", calcResult);

  function calcResult() {
    switch (operator) {
      case "+":
        display.textContent = add(operand1, operand2);
        displayValue = display.textContent;
        console.log(displayValue);
        break;
      case "-":
        display.textContent = subtract(operand1, operand2);
        displayValue = display.textContent;
        console.log(displayValue);
        break;
      case "*":
        display.textContent = multiply(operand1, operand2);
        displayValue = display.textContent;
        console.log(displayValue);
        break;
      case "/":
        display.textContent = divider(operand1, operand2);
        displayValue = display.textContent;
        console.log(displayValue);
        break;
    }
  }

  function add(operand1, operand2) {
    result = +operand1 + +operand2;
    return result;
  }
  function subtract(operand1, operand2) {
    result = operand1 - operand2;
    return result;
  }
  function divider(operand1, operand2) {
    result = +operand1 / +operand2;
    return result;
  }
  function multiply(operand1, operand2) {
    result = +operand1 * +operand2;
    return result;
  }

  clearLastDisplay.addEventListener("click", () => {
    let display = document.querySelector("#display");
    let clearLast = display.textContent.toString().slice(0, -1);
    display.textContent = clearLast;
    operand1 = clearLast;
    operand2 = "";
    operator = "";
    displayValue = display.textContent;
    console.log(operand1, operand2);
    console.log(clearLast);
    console.log(displayValue);
  });

  clearAllDisplay.addEventListener("click", () => {
    operand1 = "";
    operator = "";
    operand2 = "";
    display.textContent = 0;
    displayValue = display.textContent;
    console.log(displayValue);
  });
}
calculator();
