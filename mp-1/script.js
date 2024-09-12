function add() {
    const first = Number(document.getElementById('first-number').value);
    const second = Number(document.getElementById('second-number').value);
    const result = first + second;
    displayResult(result);
}

function subtract() {
    const first = Number(document.getElementById('first-number').value);
    const second = Number(document.getElementById('second-number').value);
    const result = first - second;
    displayResult(result);
}

function multiply() {
    const first = Number(document.getElementById('first-number').value);
    const second = Number(document.getElementById('second-number').value);
    const result = first * second;
    displayResult(result);
}

function divide() {
    const first = Number(document.getElementById('first-number').value);
    const second = Number(document.getElementById('second-number').value);
    const result = first / second;
    displayResult(result);
}

function displayResult(result) {
    const output = document.getElementById('output');
    output.innerHTML = result;
    if (result < 0) {
        output.style.color = 'red';
    } else {
        output.style.color = 'black';
    }
}