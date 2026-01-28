const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
let currentInput = '';
let operator = '';
let previousInput = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        if (button.id === 'clear') {
            currentInput = '';
            previousInput = '';
            operator = '';
            display.value = '';
        } else if (button.id === 'equals') {
            if (currentInput && previousInput && operator) {
                let result = eval(previousInput + operator + currentInput);
                display.value = result;
                currentInput = result;
                previousInput = '';
                operator = '';
            }
        } else if (button.classList.contains('operator')) {
            if (currentInput === '') return;
            if (previousInput !== '') {
                // Chain calculations
                let result = eval(previousInput + operator + currentInput);
                previousInput = result;
                display.value = result;
            } else {
                previousInput = currentInput;
            }
            operator = value;
            currentInput = '';
        } else {
            currentInput += value;
            display.value = currentInput;
        }
    });
});
