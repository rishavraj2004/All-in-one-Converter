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

    // First convert to(base unit)
    let inMililitre;
    switch (inputUnit.value) {
        case 'm3': inMililitre = inputValue * 1000000; break;
        case 'dm3': inMililitre = inputValue * 1000; break;
        case 'cm3': inMililitre = inputValue; break;
        case 'mm3': inMililitre = inputValue / 1000; break;
        case 'l': inMililitre = inputValue * 1000; break;
        case 'dl': inMililitre = inputValue * 100; break;
        case 'cl': inMililitre = inputValue * 10; break;
        case 'ml': inMililitre = inputValue; break;
        case 'ft3': inMililitre = inputValue * 28316.8466; break;
        case 'in3': inMililitre = inputValue * 16.387064; break;
        case 'yd3': inMililitre = inputValue * 764554.858; break;
        default: inMililitre = inputValue;
    }

    // Then convert to desired output unit
    let result;
    switch (outputUnit.value) {
        case 'm3': result = inMililitre / 1000000; break;
        case 'dm3': result = inMililitre / 1000; break;
        case 'cm3': result = inMililitre; break;
        case 'mm3': result = inMililitre * 1000; break;
        case 'l': result = inMililitre / 1000; break;
        case 'dl': result = inMililitre / 100; break;
        case 'cl': result = inMililitre / 10; break;
        case 'ml': result = inMililitre; break;
        case 'ft3': result = inMililitre / 28316.8466; break;
        case 'in3': result = inMililitre / 16.387064; break;
        case 'yd3': result = inMililitre / 764554.858; break;
        default: result = inMililitre;
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