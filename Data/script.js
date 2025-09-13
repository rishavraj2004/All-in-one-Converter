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
    let inMb;
    switch (inputUnit.value) {
        case 'b': inMb = inputValue * 9.53674316e-7; break;
        case 'kb': inMb = inputValue * 0.0009765625; break;
        case 'mb': inMb = inputValue; break;
        case 'gb': inMb = inputValue * 1024; break;
        case 'tb': inMb = inputValue * 1048576; break;
        case 'pb': inMb = inputValue * 1.07374182e9; break;
        default: inMb = inputValue;
    }

    // Then convert to desired output unit
    let result;
    switch (outputUnit.value) {
        case 'b': result = inMb / 9.53674316e-7; break;
        case 'kb': result = inMb / 0.0009765625; break;
        case 'mb': result = inMb; break;
        case 'gb': result = inMb / 1024; break;
        case 'tb': result = inMb / 1048576; break;
        case 'pb': result = inMb / 1.07374182e9; break;
        default: result = inMb;
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