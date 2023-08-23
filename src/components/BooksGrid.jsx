import React from "react";

function BooksGrid() {
  return (
    <div className="books-wrapper">
      <div className="book-item">
        <div className="book-img"></div>
        <div className="book-info">
          <h2>Title</h2>
          <p>desc</p>
        </div>
      </div>
      <div className="book-item"></div>
      <div className="book-item"></div>
      <div className="book-item"></div>
      <div className="book-item"></div>
      <div className="book-item"></div>
    </div>
  );
}

export default BooksGrid;
