import React, { useEffect, useState } from "react";
import { useBookContext } from "./Components/BookContext";
import './index.css'

function App() {
  const { books, setBooks, searchTerm, setSearchTerm } = useBookContext();
  const [searchButtonClicked, setSearchButtonClicked] = useState(false);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch");
        }

        const data = await response.json();
        setBooks(data.items || []);
      } catch (error) {
        console.error("Error fetching books:", error);
      } finally {
        if (searchButtonClicked) {
          setSearchTerm("");
          setSearchButtonClicked(false);
        }
      }
    };

    if (searchButtonClicked && searchTerm !== "") {
      fetchBooks();
    }
  }, [searchTerm, setBooks, setSearchTerm, searchButtonClicked]);

  const handleSearch = () => {
    if (searchTerm !== "") {
      setSearchButtonClicked(true);
    }
  };

  return (
    <div>
      <h1>Books Library App</h1>
      <input
        type="text"
        placeholder="Search for books..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {books.length === 0 ? (
        <p>No books found.</p>
      ) : (
        <div className="books-container">
        {books.map((book, index) => (
          <div className="book" key={index}>
            <div className="book-header">
              <img
                className="book-thumbnail"
                src={book.volumeInfo.imageLinks?.thumbnail || ""}
                alt={`Thumbnail for ${book.volumeInfo.title}`}
              />
              <h2>{book.volumeInfo.title}</h2>
            </div>
            <p className="book-description">{book.volumeInfo.description}</p>
          </div>
        ))}
      </div>
      
        
      )}
    </div>
  );
}

export default App;

