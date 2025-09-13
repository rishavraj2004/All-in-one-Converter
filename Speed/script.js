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
    let inKmps;
    switch (inputUnit.value) {
        case 'c': inKmps = inputValue * 299792.458; break;
        case 'ma': inKmps = inputValue * 0.3403; break;
        case 'ms': inKmps = inputValue * 0.001; break;
        case 'km': inKmps = inputValue * 0.0002777778; break;
        case 'km-s': inKmps = inputValue; break;
        case 'kn': inKmps = inputValue * 0.000514444444; break;
        case 'mph': inKmps = inputValue * 0.00044704; break;
        case 'fps': inKmps = inputValue * 0.0003048; break;
        case 'ips': inKmps = inputValue * 2.54e-5; break;
        default: inKmps = inputValue;
    }

    // Then convert to desired output unit
    let result;
    switch (outputUnit.value) {
        case 'c': result = inKmps / 299792.458; break;
        case 'ma': result = inKmps / 0.3403; break;
        case 'ms': result = inKmps / 0.001; break;
        case 'km': result = inKmps / 0.0002777778; break;
        case 'km-s': result = inKmps; break;
        case 'kn': result = inKmps / 0.000514444444; break;
        case 'mph': result = inKmps / 0.00044704; break;
        case 'fps': result = inKmps / 0.0003048; break;
        case 'ips': result = inKmps / 2.54e-5; break;
        default: result = inKmps;
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