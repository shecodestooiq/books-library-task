import { useState, useContext } from "react";
import { BooksContext } from '../store/store';

function Search(){
    const { searchTerm, setSearchTerm } = useContext(BooksContext);

    return<>
      <input id="search-bar"
        type="text"
        onChange={(e) => setSearchTerm(e.target.value)} placeholder="Enter Book Title"></input></>
}

export default Search;