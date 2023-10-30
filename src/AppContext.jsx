import {
	useContext,
	useState,
	useEffect,
	createContext,
} from "react";
import { useCallback } from "react";
import App from "./App";

const URL =
	"https://www.googleapis.com/books/v1/volumes?q=";
const AppContext = createContext();

const AppProvider = ({ children }) => {
	const [searchTerm, setSearchTerm] = useState(
		"the lost world"
	);
	const [books, setBooks] = useState([]);
	const [loading, setLoading] = useState(true);
	const [resultTitle, setResultTitle] = useState("");

	const fetchBooks = useCallback(async () => {
		setLoading(true);
		try {
			const response = await fetch(`${URL}${searchTerm}`);
			const data = await response.json();
			const { items } = data;
			// console.log(items);

			if (items) {
				const newBooks = items.map((item) => {
					return {
						id: item.id,
						authors: item.volumeInfo.authors,
						cover: item.volumeInfo.imageLinks.thumbnail,
						title: item.volumeInfo.title,
						description: item.volumeInfo.description,
						publisher: item.volumeInfo.publisher,
						publishedDate: item.volumeInfo.publishedDate,
						infoLink: item.volumeInfo.infoLink,
					};
				});
				setBooks(newBooks);

				if (newBooks.length > 1) {
					setResultTitle("Your Search Result : ");
				} else {
					setResultTitle("No Search Result Found!");
				}
			} else {
				setBooks([]);
				setResultTitle("No Search Result Found!");
			}
			setLoading(false);
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	}, [searchTerm]);

	useEffect(() => {
		fetchBooks();
	}, [searchTerm, fetchBooks]);

	return (
		<AppContext.Provider
			value={{
				loading,
				books,
				setSearchTerm,
				resultTitle,
				setResultTitle,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
