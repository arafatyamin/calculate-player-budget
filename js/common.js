function getElementValueById(elementId) {
    const elementField = document.getElementById(elementId);
    const elementValueString = elementField.innerText;
    const elementValue = parseInt(elementValueString);
    return elementValue;
}

function getInputFieldValueById(inputId) {
    const inputField = document.getElementById(inputId);
    const inputValueString = inputField.value;
    const inputValue = parseInt(inputValueString);
    return inputValue;
}