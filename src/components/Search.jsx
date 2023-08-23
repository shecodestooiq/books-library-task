import React, {useContext} from "react";

function Search() {
  return (
    <>
      <center>
        <input
          type="text"
          name="search"
          placeholder="search..."
          // onChange={(e) => handleSearch(e)}
          className="search-input"
        />
      </center>
    </>
  );
}

export default Search;
