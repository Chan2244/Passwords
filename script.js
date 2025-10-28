document.addEventListener('DOMContentLoaded', () => {
    const passwordLengthInput = document.getElementById('length');
    const generateButton = document.getElementById('generate');
    const passwordOutput = document.getElementById('password');

    // Add elements for uppercase, numbers, and symbols checkboxes
    const uppercaseCheckboxDiv = document.createElement('div');
    uppercaseCheckboxDiv.innerHTML = '<label for="uppercase">Include Uppercase:</label><input type="checkbox" id="uppercase" checked />';
    passwordLengthInput.parentNode.after(uppercaseCheckboxDiv); // Insert after password length input

    const numbersCheckboxDiv = document.createElement('div');
    numbersCheckboxDiv.innerHTML = '<label for="numbers">Include Numbers:</label><input type="checkbox" id="numbers" checked />';
    uppercaseCheckboxDiv.after(numbersCheckboxDiv);

    const symbolsCheckboxDiv = document.createElement('div');
    symbolsCheckboxDiv.innerHTML = '<label for="symbols">Include Symbols:</label><input type="checkbox" id="symbols" checked />';
    numbersCheckboxDiv.after(symbolsCheckboxDiv);

    const uppercaseCheckbox = document.getElementById('uppercase');
    const numbersCheckbox = document.getElementById('numbers');
    const symbolsCheckbox = document.getElementById('symbols');

    generateButton.addEventListener('click', () => {
        const length = parseInt(passwordLengthInput.value);
        const includeUppercase = uppercaseCheckbox.checked;
        const includeNumbers = numbersCheckbox.checked;
        const includeSymbols = symbolsCheckbox.checked;

        const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
        const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numberChars = '0123456789';
        const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';

        let allChars = lowercaseChars;
        if (includeUppercase) allChars += uppercaseChars;
        if (includeNumbers) allChars += numberChars;
        if (includeSymbols) allChars += symbolChars;

        let generatedPassword = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * allChars.length);
            generatedPassword += allChars[randomIndex];
        }

        passwordOutput.value = generatedPassword;
    });
});