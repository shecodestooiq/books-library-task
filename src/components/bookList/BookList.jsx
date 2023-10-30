import React from "react";
import { useGlobalContext } from "../../AppContext";
import Loading from "../loader/Loader";
import Book from "./Book";
import "./BookList.css";

function BookList() {
	const { books, loading, resultTitle } =
		useGlobalContext();
	// console.log(books, "book");
	if (loading) return <Loading />;
	return (
		<div>
			<section className='booklist'>
				<div className='container'>
					<div className='section-title'>
						<h2> {resultTitle}</h2>
					</div>
					<div className='booklist-content grid'>
						{books.map((book) => {
							return <Book {...book} />;
						})}
					</div>
				</div>
			</section>
		</div>
	);
}

export default BookList;
