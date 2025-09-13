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
    let inCelsius;
    switch (inputUnit.value) {
        case 'c': inCelsius = inputValue; break;
        case 'f': inCelsius = ((inputValue - 32) * (5 / 9)); break;
        case 'k': inCelsius = inputValue - 273.15; break;
        default: inCelsius = inputValue;
    }

    // Then convert desired output unit
    let result;
    switch (outputUnit.value) {
        case 'c': result = inCelsius; break;
        case 'f': result = ((9 * inCelsius) / 5 + 32); break;
        case 'k': result = inCelsius + 273.15; break;
        default: result = inCelsius;
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