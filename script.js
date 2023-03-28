let result = document.getElementById('result');
let num1 = '';
let num2 = '';
let operator = '';
let decimal = false;

function addNumber(num) {
    if (operator === '') {
        num1 += num;
        result.value = num1;
    } else {
        num2 += num;
        result.value = num2;
    }
}

function addOperator(op) {
    if (num1 !== '') {
        operator = op;
        result.value = '';
        decimal = false;
    }
}

function addDecimal() {
    if (operator === '') {
        if (!decimal) {
            num1
