import { useState, useEffect } from "react";
import { BooksContext } from "../store/store";

function BooksProvider({ children }) {
    const [booksList, setBooksList] = useState([]);
    const [searchTerm, setSearchTerm] = useState('coding for dummies');
  
    useEffect(
      () => {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm===''? 'Stephen King' : searchTerm}&maxResults=40&printType=books`).then(
          (response) => {response.json().then((jsonResponse) => {setBooksList(jsonResponse.items)});}
          );
          
      }, [searchTerm] 
    );
  
    return (
      <BooksContext.Provider value={{booksList, setBooksList, searchTerm, setSearchTerm}}>
        {children}
      </BooksContext.Provider>
    );
  }

  export { BooksProvider };
