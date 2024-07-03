import React, { useState } from "react";

function EnableDisableButton() {
  const [isDisabled, setIsEnabled] = useState(false);

  function togglebutton() {
    setIsEnabled(!isDisabled);
  }

  function IamEnabled(event) {
    alert("I am Enbaled!");
  }

  return (
    <>
      <h2>Enable/Disable Button </h2>
      <button onClick={togglebutton}>
        {isDisabled ? "Enable" : "Disable"} Button
      </button>
      <button disabled={isDisabled} onClick={IamEnabled}>
        {" "}
        {isDisabled ? "Disabled" : "Enabled"}
      </button>
    </>
  );
}

export default EnableDisableButton;
