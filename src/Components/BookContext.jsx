import React, { createContext, useContext, useState } from "react";

const BookContext = createContext();

export const useBookContext = () => useContext(BookContext);

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <BookContext.Provider value={{ books, setBooks, searchTerm, setSearchTerm }}>
      {children}
    </BookContext.Provider>
  );
};
