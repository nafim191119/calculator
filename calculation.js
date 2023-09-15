function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (display.value === '0' || display.value === 'Error') {
        display.value = value;
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    document.getElementById('display').value = '0';
}

function deleteLastCharacter() {
    const display = document.getElementById('display');
    const currentValue = display.value;
    
    if (currentValue.length > 0) {
        // Remove the last character from the display
        display.value = currentValue.slice(0, -1);
    }
}

function appendPi() {
    const display = document.getElementById('display');
    if (display.value === '0' || display.value === 'Error') {
        display.value = '3.1416';
    } else {
        display.value += '3.1416';
    }
}

function calculateSquareRoot() {
    const display = document.getElementById('display');
    const currentValue = parseFloat(display.value);
    
    if (!isNaN(currentValue)) {
        // Calculate the square root and update the display
        display.value = Math.sqrt(currentValue);
    } else {
        // Display an error if the input is not a valid number
        display.value = 'Error';
    }
}

function calculateResult() {
    const displayValue = document.getElementById('display').value;
    try {
        const result = eval(displayValue);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}