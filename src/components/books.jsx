import { useState, useContext, useEffect } from "react";
import { BooksContext } from '../store/store';
import missingThumbnail from '../assets/missing-thumbnail.jpg';

function Books() {
  const { booksList, setBooksList } = useContext(BooksContext);
  const { searchTerm, setSearchTerm } = useContext(BooksContext);


  console.log(booksList);
  console.log(searchTerm);

  return (
    <>
      <input
        type="text"
        onChange={(e) => setSearchTerm(e.target.value)}></input>

      {booksList.length > 0 && booksList.map((item) => (
        <div>
          <img src={item.volumeInfo.imageLinks?.thumbnail? item.volumeInfo.imageLinks?.thumbnail : missingThumbnail} alt=""/>
          <h1>{item.volumeInfo.title}</h1>
        </div>
      ))}
    </>
  )
}

export default Books;
