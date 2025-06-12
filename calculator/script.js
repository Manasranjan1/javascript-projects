// Import the `evaluate` function from the mathjs library to safely compute expressions
import { evaluate } from 'mathjs';

// Get the input box element where expressions and results will be shown
const input = document.getElementById("inputBox");

// Select all buttons on the calculator interface
const buttons = document.querySelectorAll("button");

// Variable to store the current mathematical expression as a string
let expression = '';

// Convert NodeList to Array for easy iteration using forEach
Array.from(buttons).forEach(button => {
    // Add click event listener to each button
    button.addEventListener('click', (e) => {
        // Get the text inside the clicked button
        const btnVal = e.target.textContent;

        // If "=" is clicked, evaluate the expression using mathjs
        if (btnVal === '=') {
            try {
                // Evaluate the mathematical expression
                expression = evaluate(expression).toString();
                // Show the result in the input box
                input.value = expression;
            } catch (err) {
                // If an error occurs (e.g., invalid expression), show "Error"
                input.value = "Error";
                expression = ''; // Clear the stored expression
            }
        }

        // If "AC" is clicked, clear the expression and input field
        else if (btnVal === 'AC') {
            expression = '';
            input.value = expression;
        }

        // If "DEL" is clicked, remove the last character from the expression
        else if (btnVal === 'DEL') {
            expression = expression.slice(0, -1); // Remove last char
            input.value = expression;
        }

        // For numbers and operators, append the clicked value to the expression
        else {
            expression += btnVal;
            input.value = expression;
        }
    });
});
