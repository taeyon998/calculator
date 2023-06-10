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

function operate(a, op, b) {
    switch (op) {
        case '+':
            return add(a,b);
            break;
        case '-':
            return substract(a,b);
            break;
        case '*':
            return multiply(a,b);
            break;
        case '/':
            return divide(a,b);
            break;
    }
}



// add event listeners to all calculator buttons
function initialize() {
    // Select ALL buttons in parent container #buttons Section
    const buttonsSection = document.querySelector('#buttonsSection');
    const buttons = buttonsSection.querySelectorAll('button');

    buttons.forEach((button) => {
        button.addEventListener('click', display);
    });
}

function display(event) {

    while (screenSection.firstChild){
        screenSection.firstChild.remove(); // clear screen
    }

    const button = event.target;

    const num = document.createElement('div');
    
    num.textContent = `${button.textContent}`;
    num.style.textAlign = 'right';
    num.style.width = `600px`;
    screenSection.append(num);
}

initialize();