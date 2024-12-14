document.addEventListener("DOMContentLoaded", function() {
    let displayValue = '';    // Holds the current number or expression
    let firstOperand = null;  // First operand for calculation
    let operator = null;      // Operator (e.g., +, -, *, /)
    let shouldResetDisplay = false; // Flag to reset display for new input

    // Function to update the display with the current value
    function updateDisplay() {
        document.getElementById('display').value = displayValue;
    }

    // Function to handle number and decimal button clicks
    function show(value) {
        if (shouldResetDisplay) {
            displayValue = ''; // Reset display on new input after an operation
            shouldResetDisplay = false;
        }
        displayValue += value; // Append the clicked number or decimal
        updateDisplay();       // Update display with current input
    }

    // Function to handle operator button clicks
    function setOperator(op) {
        if (operator !== null) calculate(); // Perform the calculation if an operator exists
        firstOperand = parseFloat(displayValue); // Set the first operand
        operator = op;                          // Set the operator (e.g., +, -, *, /)
        shouldResetDisplay = true;              // Flag to reset display for new input
    }

    // Function to perform calculations based on the operator
    function calculate() {
        const secondOperand = parseFloat(displayValue); // Get the second operand

        if (operator === '+') {
            displayValue = (firstOperand + secondOperand).toString();
        } else if (operator === '-') {
            displayValue = (firstOperand - secondOperand).toString();
        } else if (operator === '*') {
            displayValue = (firstOperand * secondOperand).toString();
        } else if (operator === '/') {
            if (secondOperand === 0) {
                displayValue = 'Error'; // Handle division by zero
            } else {
                displayValue = (firstOperand / secondOperand).toString();
            }
        }
        
        operator = null;        // Reset operator after calculation
        firstOperand = null;    // Reset first operand
        shouldResetDisplay = true; // Flag to reset display for new input
        updateDisplay();        // Show the result on the display
    }

    // Function to clear the display and reset the calculator
    function clearDisplay() {
        displayValue = '';
        firstOperand = null;
        operator = null;
        shouldResetDisplay = false;
        updateDisplay();
    }

    // Make functions accessible globally
    window.show = show;
    window.setOperator = setOperator;
    window.calculate = calculate;
    window.clearDisplay = clearDisplay;
});
