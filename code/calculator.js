const screenSection = document.querySelector('#screenSection'); 

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

function display(n) {
    const num = document.createElement('div');
    
    num.textContent = `${n}`;
    num.style.textAlign = 'right';
    num.style.width = `600px`;
    screenSection.append(num);
}

display(5);