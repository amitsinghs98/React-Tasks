import React, { useState } from "react";

function ChildComponent({ id }) {
  return (
    <div>
      <p>Child Component {id}</p>
    </div>
  );
}

function ParentChildComponent() {
  const [children, setChildren] = useState([]);

  const handleAddChild = () => {
    setChildren([...children, children.length + 1]);
  };
  function handleClear() {
    setChildren([]);
  }
  return (
    <div>
      <h2>Add Child Component</h2>
      <button onClick={handleAddChild}>Add Child Component</button>
      {children.map((id) => (
        <ChildComponent key={id} id={id} />
      ))}

      {children.includes(1) && <button onClick={handleClear}>Clear</button>}
    </div>
  );
}

export default ParentChildComponent;
