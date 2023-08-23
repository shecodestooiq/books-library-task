import React from "react";
import { useEffect, useContext } from "react";
import Context from "../store/store";

function Library() {
  const {
    data,
    searchValue,
    setSearchValue,
    filteredBooks,
    setFilteredBooks,
    notFound,
    setNotFound,
    error,
  } = useContext(Context);

  useEffect(() => {
    if (searchValue) {
      const filteredBook = data.items
        ? data.items.filter((book) =>
            book.volumeInfo.title
              .toLowerCase()
              .includes(searchValue.toLowerCase())
          )
        : [];

      if (filteredBook.length > 0) {
        setNotFound("");
      } else {
        setNotFound("Opps! No Book Found.");
      }
      setFilteredBooks(filteredBook);
    } else {
      setFilteredBooks([]);
      setNotFound("");
    }
  }, [searchValue, data, setFilteredBooks, setNotFound]);

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  return Object.keys(data).length > 0 ? (
    <>
      <div className="titleContainer">
        <h1>Books By Dan Brown</h1>
      </div>
      <p>{error ? error.message : ""}</p>
      <div>
        <input
          type="text"
          value={searchValue}
          onChange={handleSearch}
          placeholder="Search.."
        />
        <p>{notFound}</p>
      </div>
      <div className="booksCards">
        {(searchValue ? filteredBooks : data.items).map((book, index) => (
          <div key={index} className="card">
            <img src={book.volumeInfo.imageLinks.thumbnail} alt="" />
            <h2>{book.volumeInfo.title}</h2>
            <h3>Author: {book.volumeInfo.authors}</h3>
            <a
              href={book.volumeInfo.infoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Show Info</button>
            </a>
          </div>
        ))}
      </div>
    </>
  ) : (
    <h1>Loading...</h1>
  );
}

export default Library;
