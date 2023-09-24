import React, { createContext, useState } from "react";

export const Context = createContext();

export const InputProvider = ({ children }) => {
  const [currentInput, setCurrentInput] = useState(null);

  return (
    <Context.Provider value={{ currentInput, setCurrentInput }}>
      {children}
    </Context.Provider>
  );
};
