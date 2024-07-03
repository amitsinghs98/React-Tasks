import React, { useState } from "react";

function SumCalculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [sums, setSums] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);
  const [showResults, setShowResults] = useState(true);

  const handleSum = () => {
    const result = parseFloat(num1) + parseFloat(num2);
    setSums([...sums, result]);
  };

  const handleClear = () => {
    setNum1("");
    setNum2("");
  };

  const handleClearAll = () => {
    setSums([]);
  };

  const toggleDisable = () => {
    setIsDisabled(!isDisabled);
  };

  const toggleResults = () => {
    setShowResults(!showResults);
  };

  return (
    <>
      <h2>Sum Calculator</h2>
      <div>
        <div>
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            placeholder="Enter first number"
          />
        </div>
        <div>
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            placeholder="Enter second number"
          />
        </div>
        <div>
          <button onClick={handleSum} disabled={isDisabled}>
            Sum
          </button>
          <button onClick={toggleDisable}>
            {isDisabled ? "Enable Sum" : "Disable Sum"}
          </button>
          {sums.length > 0 && (
            <button onClick={handleClearAll}>Clear Sums</button>
          )}
          {sums.length > 0 && (
            <button onClick={toggleResults}>
              {showResults ? "Hide Results" : "Show Results"}
            </button>
          )}
        </div>
      </div>
      {showResults && sums.length > 0 && (
        <div>
          <h3>Results:</h3>
          <ul>
            {sums.map((sum, index) => (
              <li key={index}>
                Result {index + 1}: {sum}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default SumCalculator;
