import React from "react";
import { Link } from "react-router-dom";

import "./BookList.css";

function Book({
	id,
	cover,
	title,
	authors,
	publishedDate,
	infoLink,
	description,
}) {

	return (
		<div
			className='book-item flex flex-column flex-sb'
			key={id}
		>

			{console.log({id,
					cover,
					title,
					authors,
					publishedDate,
					infoLink,
					description,})}
			<Link
				to={`/book/${id}`}
				state={{
					id,
					cover,
					title,
					authors,
					publishedDate,
					infoLink,
					description,
				}}
			>
				<div className='book-item-img'>
					<img
						src={cover}
						alt='cover'
					/>
				</div>
				<div className='book-item-info text-center'>
					<div className='book-item-info-item title fw-7 fs-18'>
						<span>{title}</span>
					</div>

					<div className='book-item-info-item author fs-15'>
						<span className='text-capitalize fw-7'>
							Author :
						</span>
						<span>
							{authors && authors.length > 1
								? authors.join(", ")
								: authors}
						</span>
					</div>

					<div className='book-item-info-item publish-year fs-15'>
						<span className='text-capitalize fw-7'>
							Publish Year :
						</span>
						<span>{publishedDate}</span>
					</div>
				</div>
			</Link>
		</div>
	);
}

export default Book;
