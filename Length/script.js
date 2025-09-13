//External Links    
// Declaration
const value = document.querySelector('.input');
const display = document.querySelector('.display-show');
const inputUnit = document.querySelector('.input-unit');
const outputUnit = document.querySelector('.output-unit');
const allClear = document.getElementById('allclear');
const backSpace = document.getElementById('backspace');
let displayValue = '';

// Handle Click



const buttons = document.querySelectorAll('.btns');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        displayValue = displayValue + buttons[i].textContent;
        value.value = displayValue;
        convertUnits();
    });
}
allClear.addEventListener("click", () => {
    value.value = '';
    displayValue = '';
    convertUnits();
});

backSpace.addEventListener("click", () => {
    let backSpacedVal = Math.floor(value.value / 10);
    value.value = backSpacedVal;
    displayValue = value.value;
    convertUnits();

});


//Function For Coverting
function convertUnits() {
    let inputValue = parseFloat(value.value);
    if (isNaN(inputValue)) {
        display.textContent = "";
        return;
    }

    // First convert to (base unit)
    let inMeters;
    switch (inputUnit.value) {
        case 'mm': inMeters = inputValue / 1000; break;
        case 'cm': inMeters = inputValue / 100; break;
        case 'm': inMeters = inputValue / 1; break;
        case 'km': inMeters = inputValue * 1000; break;
        case 'nm': inMeters = inputValue / 1000000000; break;
        case 'dm': inMeters = inputValue / 10; break;
        case 'pm': inMeters = inputValue / 1000000000000; break;
        case 'mile': inMeters = inputValue * 1609.344; break;
        case 'yard': inMeters = inputValue * 0.9144; break;
        case 'foot': inMeters = inputValue * 0.3048; break;
        case 'inch': inMeters = inputValue * 0.0254; break;
        case 'um': inMeters = inputValue / 1000000; break;
        default: inMeters = inputValue;
    }

    // Then convert to desired output unit
    let result;
    switch (outputUnit.value) {
        case 'mm': result = inMeters * 1000; break;
        case 'cm': result = inMeters * 100; break;
        case 'm': result = inMeters; break;
        case 'km': result = inMeters / 1000; break;
        case 'nm': result = inMeters * 1000000000; break;
        case 'dm': result = inMeters * 10; break;
        case 'pm': result = inMeters * 1000000000000; break;
        case 'mile': result = inMeters / 1609.344; break;
        case 'yard': result = inMeters / 0.9144; break;
        case 'foot': result = inMeters / 0.3048; break;
        case 'inch': result = inMeters / 0.0254; break;
        case 'um': result = inMeters * 1000000; break;
        default: result = inMeters;
    }

    display.textContent = result;
}

// Event listeners
inputUnit.addEventListener('change', convertUnits);
outputUnit.addEventListener('change', convertUnits);

// Dark Mode

var darkMode = document.getElementById('dark-btn');
darkMode.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    displayValue = value.value;
    convertUnits();

})
//Previous Page
function goBack() {
    window.history.back();
}