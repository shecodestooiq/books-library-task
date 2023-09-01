// useEffect(() => {
//   console.log("Fetching data for searchTerm:", searchTerm);
//   fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log("Data received:", data);
//       setBooks(data.items || []);
//       setSearchTerm(""); // Clear the search term after successfully fetching data
//     });
// }, [searchTerm, setBooks, setSearchTerm]);
//i'll try to make it work later

