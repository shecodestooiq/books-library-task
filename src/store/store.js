import React, { createContext } from 'react'
import { useState, useEffect } from 'react'
const Context = createContext();

export function BooksProvider({ children }) {
    const [data, setData] = useState([]);
    const searchParam = "danbrown";

    const [searchValue, setSearchValue] = useState("");
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [notFound, setNotFound] = useState("");
    const [error, setError] = useState("");

    const fetchData = () => {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchParam}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setData(data);
            })
            .catch((error) => {
                setError("Error fetching data:", error);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Context.Provider value={{ data, searchValue, setSearchValue, filteredBooks, setFilteredBooks, notFound, setNotFound, error, setError }}>
            {children}
        </Context.Provider>
    )
}

export default Context
