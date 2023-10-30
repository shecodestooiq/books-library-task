import React from "react";
import { AppProvider } from "./AppContext";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import BookList from "./components/bookList/BookList";
import BookDetails from "./components/bookDetails/BookDetails";

function App() {
	return (
		<>
			<AppProvider>
				<Routes>
					<Route
						path='/'
						element={<Home />}
					>
						<Route
							path='/about'
							element={<About />}
						/>
						<Route
							path='book'
							element={<BookList />}
						/>
						<Route
							path='/book/:id'
							element={<BookDetails />}
						/>
					</Route>
				</Routes>
			</AppProvider>
		</>
	);
}

export default App;
