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
    let inSquareKilometer;
    switch (inputUnit.value) {
        case 'km2': inSquareKilometer = inputValue; break;
        case 'ha': inSquareKilometer = inputValue / 100; break;
        case 'a': inSquareKilometer = inputValue / 10000; break;
        case 'm2': inSquareKilometer = inputValue / 1000000; break;
        case 'dm2': inSquareKilometer = inputValue / 100000000; break;
        case 'cm2': inSquareKilometer = inputValue / 10000000000; break;
        case 'mm2': inSquareKilometer = inputValue / 1000000000000; break;
        case 'um2': inSquareKilometer = inputValue / 1000000000000000000; break;
        case 'ac': inSquareKilometer = inputValue * 0.004046856; break;
        case 'mile2': inSquareKilometer = inputValue * 2.58998811; break;
        case 'yd2': inSquareKilometer = inputValue * 8.3612736e-8; break;
        case 'ft2': inSquareKilometer = inputValue * 9.290304e-8; break;
        case 'inch2': inSquareKilometer = inputValue * 6.4516e-10; break;
        case 'rd2': inSquareKilometer = inputValue * 2.52928526e-5; break;
        default: inSquareKilometer = inputValue;
    }

    // Then convert  to desired output unit
    let result;
    switch (outputUnit.value) {
        case 'km2': result = inSquareKilometer; break;
        case 'ha': result = inSquareKilometer * 100; break;
        case 'a': result = inSquareKilometer * 10000; break;
        case 'm2': result = inSquareKilometer * 1000000; break;
        case 'dm2': result = inSquareKilometer * 100000000; break;
        case 'cm2': result = inSquareKilometer * 10000000000; break;
        case 'mm2': result = inSquareKilometer * 1000000000000; break;
        case 'um2': result = inSquareKilometer * 1000000000000000000; break;
        case 'ac': result = inSquareKilometer / 0.004046856; break;
        case 'mile2': result = inSquareKilometer / 2.58998811; break;
        case 'yd2': result = inSquareKilometer / 8.3612736e-8; break;
        case 'ft2': result = inSquareKilometer * 9.290304e-8; break;
        case 'inch2': result = inSquareKilometer * 6.4516e-10; break;
        case 'rd2': result = inSquareKilometer * 2.52928526e-5; break;
        default: result = inSquareKilometer;
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