import { useState } from 'react';


function Calculator() {
    const [firstNumber, setFirstNumber] = useState<number>(0);
    const [secondNumber, setSecondNumber] = useState<number>(0);
    const [result, setResult] = useState<number | null>(null);

    const add = () => setResult(firstNumber + secondNumber);
    const subtract = () => setResult(firstNumber - secondNumber);
    const multiply = () => setResult(firstNumber * secondNumber);
    const divide = () => setResult(firstNumber / secondNumber);

    return (
        <>
            <div className="calculator">
                <div className="calculator-display">
                    <input type="number" value={firstNumber} onChange={e => setFirstNumber(Number(e.target.value))} />
                    <input type="number" value={secondNumber} onChange={e => setSecondNumber(Number(e.target.value))} />
                </div>
                <div className="calculator-buttons">
                    <button onClick={add}>+</button>
                    <button onClick={subtract}>-</button>
                    <button onClick={multiply}>×</button>
                    <button onClick={divide}>÷</button>
                </div>
                <div className="calculator-result">
                    {result !== null ? `Result: ${result}` : ''}
                </div>
            </div>
        </>
    );
}

export default Calculator;