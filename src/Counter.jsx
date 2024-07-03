import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState("");
  const handleCountOne = () => {
    setCount(Number(count) + 1);
    console.log(count);
  };

  const handleCountTwo = () => {
    setCount(Number(count) - 1);
  };
  return (
    <>
      <h2>Increase/Decrease Counter</h2>
      <span>
        <button onClick={handleCountOne}>Increase</button>
        <button onClick={handleCountTwo}>Decrease</button>
        {count !== "" && <p>Count is:{count}</p>}
        {count !== "" && (
          <button onClick={() => setCount("")}>Clear Counter</button>
        )}
      </span>
    </>
  );
}

export default Counter;
