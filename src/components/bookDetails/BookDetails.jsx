import React from "react";
import { useLocation } from "react-router-dom";
import Loading from "../loader/Loader";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import "./BookDetails.css";

function BookDetails() {
	const  {state}  = useLocation();
  
	const {
		id,
		cover,
		title,
		authors,
		publishedDate,
		infoLink,
		description,
  } = state ?? {};

	return (
		<div className=' container flex'>
			<img
				src={cover}
				alt={`cover${title}`}
				className='image'
			/>
			<div className='gap flex flex-column'>
				<p>Title:{title}</p>
				<p>Authors: {authors && authors.join(", ")}</p>
				<p>Published Date: {publishedDate}</p>
				<p> Description : {description}</p>
				<a
					href={infoLink}
					className='link flex flex-c'
				>
					More Info
				</a>
			</div>
		</div>
	);
}

export default BookDetails;
