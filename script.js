const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';
let operatorSet = false;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.dataset.value;

        if (button.id === 'clear') {
            currentInput = '';
            display.value = '';
            operatorSet = false;
        } else if (button.id === 'equals') {
            try {
                if (currentInput) {
                    let result = eval(currentInput.replace(/÷/g, '/').replace(/×/g, '*'));
                    display.value = result;
                    currentInput = result.toString();
                    operatorSet = false;
                }
            } catch (e) {
                display.value = 'Error';
                currentInput = '';
            }
        } else {
            if (['+', '-', '*', '/'].includes(value)) {
                if (currentInput === '' || operatorSet) return;
                operatorSet = true;
            } else {
                operatorSet = false;
            }
            currentInput += value;
            display.value = currentInput;
        }
    });
});