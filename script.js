let currentInput = '';
let operator = '';
let previousInput = '';

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function setOperator(op) {
    if (currentInput !== '') {
        operator = op;
        previousInput = currentInput;
        currentInput = '';
        updateDisplay();
    }
}

function calculateResult() {
    if (currentInput !== '' && previousInput !== '') {
        const num1 = parseFloat(previousInput);
        const num2 = parseFloat(currentInput);

        switch (operator) {
            case '+':
                currentInput = (num1 + num2).toString();
                break;
            case '-':
                currentInput = (num1 - num2).toString();
                break;
            case '*':
                currentInput = (num1 * num2).toString();
                break;
            case '/':
                currentInput = (num1 / num2).toString();
                break;
            default:
                break;
        }

        operator = '';
        previousInput = '';
        updateDisplay();
    }
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    previousInput = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = currentInput;
}

