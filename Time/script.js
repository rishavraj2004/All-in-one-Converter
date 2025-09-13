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
    let inHour;
    switch (inputUnit.value) {
        case 'y': inHour = inputValue * 8760; break;            // 365 days
        case 'wk': inHour = inputValue * 168; break;            // 7 days * 24h
        case 'd': inHour = inputValue * 24; break;              // 24 hours
        case 'h': inHour = inputValue; break;
        case 'min': inHour = inputValue / 60; break;
        case 's': inHour = inputValue / 3600; break;
        case 'ms': inHour = inputValue / 3.6e6; break;
        case 'us': inHour = inputValue / 3.6e9; break;
        case 'ps': inHour = inputValue / 3.6e15; break;
        default: inHour = inputValue;
    }

    let result;
    switch (outputUnit.value) {
        case 'y': result = inHour / 8760; break;
        case 'wk': result = inHour / 168; break;
        case 'd': result = inHour / 24; break;
        case 'h': result = inHour; break;
        case 'min': result = inHour * 60; break;
        case 's': result = inHour * 3600; break;
        case 'ms': result = inHour * 3.6e6; break;
        case 'us': result = inHour * 3.6e9; break;
        case 'ps': result = inHour * 3.6e15; break;
        default: result = inHour;
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