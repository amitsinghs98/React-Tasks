import React from "react";
import { useState } from "react";

function ShowHide() {
  const [show, setShow] = useState(false);

  function handleClick() {
    setShow(!show); // Toggle the state
  }
  return (
    <>
      <h2>Show / Hide Element</h2>
      <button onClick={handleClick}>Show/Hide</button>
      {show && <p>Element is visible now</p>}{" "}
    </>
  );
}
export default ShowHide;
