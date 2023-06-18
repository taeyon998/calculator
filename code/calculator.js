const screenSection = document.querySelector('#screenSection');

let displayValue = '0';
let firstOperand = null; // "3" + 5
let secondOperand = null; // 3 + "5"
let firstOperator = null; // 3 "+" 5
let result = null;
const buttons = document.querySelectorAll('button');


let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

let n1, op, n2;

// EFFECT: Given (5, '+', 6), performs 5+6 = 11
function operate(a, op, b) {
    switch (op) {
        case '+':
            return add(a, b);
            break;
        case '-':
            return subtract(a, b);
            break;
        case '*':
            return multiply(a, b);
            break;
        case '/':
            return divide(a, b);
            break;
    }
}



// EFFECT: add event listeners to all calculator buttons
function initialize() {
    // Select ALL buttons in parent container #buttons Section
    const buttonsSection = document.querySelector('#buttonsSection');
    const buttons = buttonsSection.querySelectorAll('button');

    buttons.forEach((button) => {
        button.addEventListener('click', display);
    });

    display();
}

// EFFECT: show displayValue
function display(event) {

    while (screenSection.firstChild) {
        screenSection.firstChild.remove(); // clear screen
    }

    const num = document.createElement('div');

    num.textContent = displayValue;
    num.style.textAlign = 'right';
    num.style.width = `600px`;
    screenSection.append(num);
}

initialize();

// EFFECT: user clicks button '5' -> inputOperand(5) -> updates display from '0' -> '5'
function inputOperand(v) {
    // "55" + 32 -> Don't update firstOperand, until user inputs operator!
    if (firstOperand === null) {
        if (displayValue === '0') { // Eg. By default, calculator displays '0'. We don't want it to become '05', we want it to be '5'
            displayValue = v;
        }
        else {
            displayValue += v; // Eg. '7' -> '75'
        }
    }
    // 55 + "32" -> After user inputs operator
    else {
        if (displayValue === firstOperand) { // 3rd click, when inputting "3". Basically, display is still at 55, which is firstOperand. Update display from "55" -> "3"
            displayValue = v;
        }
        else { // When inputting "2". Update display from "3" -> "32"
            displayValue += v;
        }
    }
}

// EFFECT: user clicks '+' -> inputOperator('+') -> updates firstOperand from null -> '55'
function inputOperator(op) {
    // Case 1: firstOperand = null, firstOperator = null -> (1) update firstOperator = '+', (2) update firstOperand = '55'
    // Eg. User inputs "55" then "+"
    if (firstOperand === null && firstOperator === null) {
        firstOperator = op;
        firstOperand = displayValue;
    }
    // Case 2:
    // Eg. User inputs "5 + 3 =", then inputs "+"
    else if (firstOperand != null && firstOperator === null) {
        firstOperator = op;
    }
    // Case 3: firstOperand = '55', firstOperator = '+' -> (0) update secondOperant from null to '32' (1) update result from null -> '87', (2) update display from '55' -> '87', (3) update firstOperator = '+', (4) update SecondOperand = null
    // Eg. User inputs "55 + 32", then inputs "+" again    
    else{
        secondOperand = displayValue;
        result = operate(Number(firstOperand), firstOperator, Number(secondOperand));
        displayValue = result;
        firstOperator = op;
        firstOperand = result;
        secondOperand = null;
    }
}

function clearDisplay() {
    displayValue = '0';
    firstOperand = null; // "3" + 5
    secondOperand = null; // 3 + "5"
    firstOperator = null; // 3 "+" 5
    result = null;
}

function inputEquals(){
    secondOperand = displayValue;
    result = operate(Number(firstOperand), firstOperator, Number(secondOperand));
    displayValue = result;
    firstOperand = result; // "3" + 5
    secondOperand = null; // 3 + "5"
    firstOperator = null; // 3 "+" 5
    result = null;
}

// add EVENT LISTENERS to all buttons
function clickButton() {
    console.log(`${buttons.length}`);
    for (let i = 0; i < buttons.length; i++) {

        buttons[i].addEventListener('click', function () {
            if (buttons[i].classList.contains('operand')) {
                console.log(`${buttons[i]}`);
                inputOperand(buttons[i].textContent);
                display();
            }
            else if (buttons[i].classList.contains('operator')) {
                inputOperator(buttons[i].textContent);
                display();
            }
            else if (buttons[i].classList.contains('clear')) {
                clearDisplay();
                display();
            }
            else if (buttons[i].classList.contains('equals')){
                inputEquals();
                display();
            }
            else {
                alert(buttons[i].textContent);
            }
        })
    }
}

clickButton();