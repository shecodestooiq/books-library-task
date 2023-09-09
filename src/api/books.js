export const getAllBooks = async () => {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=all`);
    const data = await response.json();
    return data.items;
};