// Calculator Elements
const keys = document.querySelectorAll('.key');
const displayOutput = document.querySelector('.output');

// Variable to store the current input
let input = "";

// Add click event listeners to all keys
keys.forEach(key => {
    key.addEventListener('click', () => {
        const value = key.textContent;

        if (value === 'C') {
            clearDisplay();
        } else if (value === '=') {
            calculateResult();
        } else if (value === '+/-') {
            toggleSign();
        } else if (value === '%') {
            calculatePercentage();
        } else {
            updateInput(value);
        }
    });
});

// Clear the calculator display
function clearDisplay() {
    input = "";
    displayOutput.textContent = "0";
}

// Update the input and display it
function updateInput(value) {
    if (value === '.' && input.includes('.')) return;

    input += value;
    displayOutput.textContent = input;
}

// Calculate the result and display it
function calculateResult() {
    try {
        const result = eval(input.replace('×', '*').replace('÷', '/'));
        displayOutput.textContent = formatResult(result);
        input = result.toString();
    } catch (e) {
        displayOutput.textContent = "Error";
        input = "";
    }
}

// Toggle between positive and negative values
function toggleSign() {
    if (input.startsWith('-')) {
        input = input.slice(1);
    } else if (input) {
        input = '-' + input;
    }
    displayOutput.textContent = input || "0";
}

// Calculate the percentage
function calculatePercentage() {
    if (input) {
        const result = parseFloat(input) / 100;
        displayOutput.textContent = formatResult(result);
        input = result.toString();
    }
}

// Format the result to remove unnecessary decimals
function formatResult(result) {
    return Number(result).toLocaleString();
}