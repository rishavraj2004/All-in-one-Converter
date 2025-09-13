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
    let inKilogram;
    switch (inputUnit.value) {
        case 'kg': inKilogram = inputValue; break;
        case 'g': inKilogram = inputValue / 1000; break;
        case 'mg': inKilogram = inputValue / 1000000; break;
        case 'q': inKilogram = inputValue * 100; break;
        case 'lb': inKilogram = inputValue * 0.45359237; break;
        case 't': inKilogram = inputValue * 1000; break;
        case 'ug': inKilogram = inputValue / 1000000000; break;
        default: inKilogram = inputValue;
    }

    // Then convert to desired output unit
    let result;
    switch (outputUnit.value) {
        case 'kg': result = inKilogram; break;
        case 'g': result = inKilogram * 1000; break;
        case 'mg': result = inKilogram * 1000000; break;
        case 'q': result = inKilogram / 100; break;
        case 'lb': result = inKilogram / 0.45359237; break;
        case 't': result = inKilogram / 1000; break;
        case 'ug': result = inKilogram * 1000000000; break;
        default: result = inKilogram;
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