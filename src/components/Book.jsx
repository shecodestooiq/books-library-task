import React from "react";
import Color from "color-thief-react";
var randomColor = require("randomcolor");

function Book({ book, index }) {
  let randomBg = randomColor({
    luminosity: "random",
    hue: "random",
  });
//   const styleChanger = (bookTitle) => {
//     const words = bookTitle.split(" ");

//     const numberOfWords = words.length;
//     const baseFontSize = 16;
//     const adjustedFontSize = baseFontSize + numberOfWords;

//     return { fontSize: `${adjustedFontSize}px` };
//   };

  return (
    <div
      className="book-item"
      key={index}
      style={{ backgroundColor: randomBg }}
    >
      <div className="book-img">
        <img src={book.volumeInfo.imageLinks.thumbnail} alt="" />
      </div>

      <div className="book-info" >
        {book.volumeInfo && (
          <>
            <h2>{book.volumeInfo.title}</h2>
            {book.volumeInfo.authors && <p>{book.volumeInfo.authors[0]}</p>}
          </>
        )}
      </div>
    </div>
  );
}

export default Book;
