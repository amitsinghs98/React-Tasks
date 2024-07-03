import React, { useState } from "react";

function DataBindBox() {
  const [text, setText] = useState("");
  const handleChange = (event) => {
    setText(event.target.value);
  };
  const handleClear = () => {
    setText("");
  };
  return (
    <>
      <h2>Data Binding with textbox</h2>
      <input type="text" id="inputText" value={text} onChange={handleChange} />
      {text && <p>You typed: {text} </p>}
      {text && <button onClick={handleClear}>Clear Text</button>}
    </>
  );
}

export default DataBindBox;
