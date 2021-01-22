import { useEffect, useState } from "react";

const OPERANDS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', 'x', '='];

export default function App() {

  const [numberLeft, setNumberLeft] = useState('');
  const [numberRight, setNumberRight] = useState('');
  const [operator, setOperator] = useState('');

  const onOperandClicked = (operand) => {
    
    if (['+', '-', 'x'].includes(operand)) {
      if (numberLeft === '') {
        alert('Left number not entered!');
      }
      else {
        setOperator(operand);
      }
    }
    else if (operand === '=') {

      const result = parseInt(numberLeft, 10) + Number(numberRight);

      setNumberLeft(String(result));
      setOperator('');
      setNumberRight('');

    }
    else {
      if (operator !== '') {
        setNumberRight(numberRight + operand);
      }
      else {
        setNumberLeft(numberLeft + operand);
      }
    }

  }

  useEffect(() => {
    alert(numberLeft + ' :: ' + numberRight)
  }, [numberLeft, numberRight]);

  return (
    <div className="App">
      
      <h1>{numberLeft} {operator} {numberRight}</h1>

      {OPERANDS.map(operand =>
        <button type="button" onClick={() => onOperandClicked(operand)}>{operand}</button>
      )}

    </div>
  );

}
