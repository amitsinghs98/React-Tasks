import React from "react";

function NameList(props) {
  const myList = props.myList;

  const updatedList = myList.map((mapList, index) => {
    return <li key={index}>{mapList}</li>;
  });

  return <ul>{updatedList}</ul>;
}

function MyList() {
  const myLists = ["Peter", "Amit", "Rohan", "Manit", "Sachin"];
  return <NameList myList={myLists} />;
}

export default function ArrayList() {
  return (
    <div>
      <div className="arrayStyle"> Showing Array with Map: </div>
      <MyList />
    </div>
  );
}
