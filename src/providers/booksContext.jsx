import React, { createContext, useState } from "react";


export const Context = createContext();


export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  return (
    <Context.Provider value={{ books, setBooks }}>
      {children}
    </Context.Provider>
  );
};
