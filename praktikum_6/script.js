let display = document.getElementById('display');

function appendCharacter(char) {
    display.value += char;
}

function clearDisplay() {
    display.value = '';
}

function deleteCharacter() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        alert('Kesalahan dalam perhitungan!');
        clearDisplay();
    }
}