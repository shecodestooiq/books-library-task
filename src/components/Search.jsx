import React, { useContext } from "react";
import { Context } from "../providers/booksContext";

function Search() {
  const { setCurrentInput } = useContext(Context);

  const handleSearch = (input) =>
    input.length > 0 ? setCurrentInput(input) : setCurrentInput(null);

  return (
    <>
      <center>
        <input
          type="text"
          name="search"
          placeholder="search..."
          onChange={(e) => handleSearch(e.target.value)}
          className="search-input"
        />
      </center>
    </>
  );
}

export default Search;
