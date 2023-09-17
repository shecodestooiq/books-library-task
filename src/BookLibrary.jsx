import React, { useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Button from '@mui/material/Button';




function BookLibrary() {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState([]);

  const handleSearch = () => {
    const apiUrl =` https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(searchTerm)}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const fetchedBooks = data.items || [];
        setBooks(fetchedBooks);
      })
      .catch(error => console.error(error));
  };

  return (
    <div >
      <div  className='App'>
      <h1>Book Library</h1>
      

      <input
        type="text"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        placeholder="Search by title or author"
      />
            <Button variant="contained" onClick={handleSearch}>Search</Button>


      </div>
     
      <div  className='books' >
        {books.length === 0 ? (
          <p>No books found.</p>
        ) : (
            <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
            {books.map((book) => (
              <ImageListItem key={book.id}>
                <img
                  src={book.volumeInfo.imageLinks?.thumbnail || '/placeholder.png'+'w=164&h=164&fit=crop&auto=format'}
                  srcSet={`${book.volumeInfo.imageLinks}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={`Cover for ${book.volumeInfo.title}`}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
          )}
        
      </div>
      </div>
  );
}

export default BookLibrary;