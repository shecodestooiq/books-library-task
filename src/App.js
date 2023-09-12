import React, { useState, useEffect, createContext, useContext } from 'react';
import './App.css';

const API_URL = 'https://www.googleapis.com/books/v1/volumes?q=';
const INITIAL_SEARCH_TERM = 'Harry Potter'; 

const BooksContext = createContext();

function App() {
  const [searchTerm, setSearchTerm] = useState(INITIAL_SEARCH_TERM);
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetch(API_URL + searchTerm)
      .then((response) => response.json())
      .then((data) => {
        if (data.items) {
          setBooks(data.items);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchTerm(INITIAL_SEARCH_TERM);
  };

  return (
    <div className="App">
      <h1>Book Search App</h1>
      <div className="SearchContainer">
        <input
          type="text"
          placeholder="Search for books..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <button onClick={handleClearSearch}>Clear</button>
      </div>
      <BooksContext.Provider value={{ books, isLoading }}>
        <BookList />
      </BooksContext.Provider>
    </div>
  );
}

function BookList() {
  const { books, isLoading } = useContext(BooksContext);

  return (
    <div className="BookList">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        books.map((book) => (
          <Book key={book.id} book={book} />
        ))
      )}
    </div>
  );
}

function Book({ book }) {
  const { volumeInfo } = book;
  const title = volumeInfo.title;
  const authors = volumeInfo.authors ? volumeInfo.authors.join(', ') : 'Unknown';

  return (
    <div className="Book">
      <h2>{title}</h2>
      <p>Authors: {authors}</p>
    </div>
  );
}

export default App;
