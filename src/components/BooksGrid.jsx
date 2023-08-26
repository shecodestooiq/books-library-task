import React, { useEffect, useState, useContext } from "react";
import getBooks from "../services/api";
import { Context } from "../providers/booksContext";
import Book from "./Book";

function BooksGrid() {
  const [books, setBooks] = useState([]);

  const { currentInput } = useContext(Context);

  useEffect(() => {
    getBooks(setBooks);
  }, []);

  console.log(currentInput);
  return (
    <div className="books-wrapper">
      {books && (
        <>
          {currentInput !== null ? (
            <>
              {books
                .filter((book) =>
                  book.volumeInfo.title
                    .toLowerCase()
                    .includes(currentInput.toLowerCase())
                )
                .map((book, index) => (
                  <Book book={book} index={index} />
                ))}
            </>
          ) : (
            <>
              {books.map((book, index) => (
                <Book book={book} index={index} />
              ))}
            </>
          )}
        </>
      )}
    </div>
  );
}

export default BooksGrid;
