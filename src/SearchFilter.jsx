import React, { useState } from "react";
const productList = [
  { id: 1, name: "Car" },
  { id: 2, name: "Bike" },
  { id: 3, name: "BMW" },
  { id: 4, name: "Yatch" },
  { id: 5, name: "Surfer" },
];

function SearchFilter() {
  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const FilteredResults = productList.filter((results) =>
    results.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
      <h1>Search Filter</h1>
      <input
        type="text"
        placeholder="Search Here"
        onChange={handleSearch}
        value={search}
      />
      {FilteredResults.map((results) => (
        <li key={results.id}>{results.name}</li>
      ))}
    </>
  );
}

export default SearchFilter;
