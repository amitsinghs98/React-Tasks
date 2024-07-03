import React, { useState } from "react";

function SumCalculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [sum, setSum] = useState("");

  const handleSum = () => {
    // Convert input values to numbers and compute sum
    const result = parseFloat(num1) + parseFloat(num2);
    setSum(result); // Update the sum state
  };
  const handleClear = () => {
    setSum("");
    setNum1("");
    setNum2("");
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
          <button onClick={handleSum}>Sum</button>
          {sum && <button onClick={handleClear}>Clear Sum </button>}
        </div>
      </div>
      {sum && <input type="number" placeholder="Result is" value={sum} />}
    </>
  );
}

export default SumCalculator;
