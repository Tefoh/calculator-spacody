import { useState } from "react";

function App() {
  const [currentNumber, setCurrentNumber] = useState('');
  const [prevNumber, setPrevNumber] = useState('');
  const [operator, setOperator] = useState('');

  function addNumber(number) {
    if (number === 0 && parseFloat(currentNumber) === 0) return;

    setCurrentNumber(oldCurrentNumber => oldCurrentNumber + number)
  }

  function deleteNumber() {
    setCurrentNumber(oldCurrentNumber => oldCurrentNumber.slice(0, -1))
  }

  function clearNumber() {
    setCurrentNumber('')
  }

  function squartNumber() {
    setCurrentNumber(oldCurrentNumber => {
      const num = parseFloat(oldCurrentNumber)

      return Math.sqrt(num);
    })
  }

  function addOperator(op) {
    setPrevNumber(currentNumber);
    setOperator(op);
    setCurrentNumber('');
  }

  function equal() {
    switch(operator) {
      case '+':
        setCurrentNumber(oldCurrentNumber => (parseFloat(prevNumber) + parseFloat(oldCurrentNumber)).toString())
        break;
      case '-':
        setCurrentNumber(oldCurrentNumber => (parseFloat(prevNumber) - parseFloat(oldCurrentNumber)).toString())
        break;
      case '*':
        setCurrentNumber(oldCurrentNumber => (parseFloat(prevNumber) * parseFloat(oldCurrentNumber)).toString())
        break;
      case '/':
        setCurrentNumber(oldCurrentNumber => (parseFloat(prevNumber) / parseFloat(oldCurrentNumber)).toString())
        break;
      case '%':
        setCurrentNumber(oldCurrentNumber => (parseFloat(prevNumber) % parseFloat(oldCurrentNumber)).toString())
        break;
      default:
        break;
    }
    setPrevNumber('');
  }

  function addDot() {
    if (currentNumber.includes('.')) return;

    setCurrentNumber(oldCurrentNumber => oldCurrentNumber + '.')
  }

  return (
    <div className="container">
      <div className="header">Calculator</div>
      <input type="text" className="result" value={currentNumber} readOnly />
      <div className="first-row">
        <input type="button" value="&radic;" onClick={squartNumber} className="global" />
        <input type="button" value="%" onClick={() => addOperator('%')} className="global" />
      </div>
      <div className="second-row">
        <input type="button" value="7" onClick={() => addNumber(7)} className="global" />
        <input type="button" value="8" onClick={() => addNumber(8)} className="global" />
        <input type="button" value="9" onClick={() => addNumber(9)} className="global" />
        <input type="button" value="/" onClick={() => addOperator('/')} className="global" />
      </div>
      <div className="third-row">
        <input type="button" value="4" onClick={() => addNumber(4)} className="global" />
        <input type="button" value="5" onClick={() => addNumber(5)} className="global" />
        <input type="button" value="6" onClick={() => addNumber(6)} className="global" />
        <input type="button" value="X" onClick={() => addOperator('*')} className="global" />
      </div>
      <div className="fourth-row">
        <input type="button" value="1" onClick={() => addNumber(1)} className="global" />
        <input type="button" value="2" onClick={() => addNumber(2)} className="global" />
        <input type="button" value="3" onClick={() => addNumber(3)} className="global" />
        <input type="button" value="-" onClick={() => addOperator('-')} className="global" />
      </div>
      <div className="conflict">
        <div className="left">
          <input type="button" value="0" onClick={() => addNumber(0)} className=" big" />
          <input type="button" value="." onClick={addDot} className=" small" />
          <input type="button" value="Del" onClick={deleteNumber} className=" red small white-text top-margin" />
          <input type="button" value="C" onClick={clearNumber} className="blue small white-text top-margin" />
          <input type="button" value="=" onClick={equal} className=" green white-text small top-margin" />
        </div>
        <div className="right">
          <input type="button" value="+" onClick={() => addOperator('+')} className="global grey plus" />
        </div>
      </div>
    </div>
  );
}

export default App;
