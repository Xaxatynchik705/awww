function clearInput() {
    document.forms.answer.value = '';
}

function deleteLastCharacter() {
    var input = document.forms.answer.value;
    document.forms.answer.value = input.substr(0, input.length - 1);
}

function addPercentage() {
    document.forms.answer.value += '%';
}

function addDivision() {
    document.forms.answer.value += '/';
}

function addNumbersAndMultiplication(num) {
    document.forms.answer.value += num;
}

function addNumbersAndSubtraction(num) {
    document.forms.answer.value += num;
}

function addNumbersAndAddition(num) {
    document.forms.answer.value += num;
}

function addZeroAndDecimal(num) {
    document.forms.answer.value += num;
}

function calculate() {
    var result = eval(document.forms.answer.value);
    document.forms.answer.value = result;
}
