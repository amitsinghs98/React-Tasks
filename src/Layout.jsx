import React from "react";
import { Outlet, Link } from "react-router-dom";
import Home from "./Home";

function handleClick() {
  alert("showing Array Project");
}

export default function Layout() {
  return (
    <div>
      <Link to="/Home">
        {" "}
        <h1>Home </h1>
      </Link>

      <h2>
        <Link to="/ArrayList" onClick={handleClick}>
          ArrayList
        </Link>
      </h2>

      <Outlet />
    </div>
  );
}
