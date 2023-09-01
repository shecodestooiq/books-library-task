import { useState, useContext, useEffect } from "react";
import { BooksContext } from '../store/store';
import missingThumbnail from '../assets/missing-thumbnail.jpg';
import Search from "./search";

function Books() {
  const { booksList, setBooksList } = useContext(BooksContext);
 

  return (
    <div className="home-page">
    <Search />
    <div className="books-container">
      {booksList.length > 0 && booksList.map((item) => (
        <div className="book-card">
          <img id="book-cover" src={item.volumeInfo.imageLinks?.thumbnail? item.volumeInfo.imageLinks?.thumbnail : missingThumbnail} alt=""/>
          <h1 id="book-title">{item.volumeInfo.title}</h1>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Books;
