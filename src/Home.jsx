import React from "react";
import JSXExample from "./JSXExample";
import ArrayList from "./ArrayList";
import { Outlet, Link } from "react-router-dom";
import ShowHide from "./ShowHide";
import EnableDisableButton from "./EnableDisable";
import DataBindBox from "./DataBinding";
import ParentChildComponent from "./ChildComponent";
import SumCalculator from "./SumCalculator";
import Counter from "./Counter";
import SearchFilter from "./SearchFilter";

function Home() {
  return (
    <>
      <div className="class-task1">
        <button className="ProjectsHome">Task 1</button>
        <JSXExample />
        <h2> Array List</h2>
        <Link to="/ArrayList">
          <button>Click to See</button>
        </Link>
        <ShowHide />
        <EnableDisableButton />
        <DataBindBox />
        <ParentChildComponent />
        <SumCalculator />
        <br></br>
        <br></br>
      </div>
      <div className="class-task2">
        <button className="ProjectsHome">Task 2</button>
        <Counter />
        <br></br>
        <br></br>
        <div className="class-task3">
          <button className="ProjectsHome">Task 3</button>
          <SearchFilter />
        </div>
        <br></br>
        <br></br>
      </div>
    </>
  );
}

export default Home;
