function add() {
    const first = Number(document.getElementById('first-number').value);
    const second = Number(document.getElementById('second-number').value);
    console.log("First Number:", first);
    console.log("Second Number:", second);
    const result = first + second;
    console.log("Result:", result);
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

function power() {
    const base = Number(document.getElementById('first-number').value);
    const exp = Number(document.getElementById('second-number').value);
    let result = 1;
    for (let i = 0; i < exp; i++) {
        result *= base;
    }
    displayResult(result);
}

function clearFields() {
    document.getElementById('first-number').value = "";
    document.getElementById('second-number').value = "";
    document.getElementById('output').innerHTML = "";
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