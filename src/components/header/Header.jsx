import React from "react";

import Navbar from "../navbar/Navbar";
import SearchForm from "../searchForm/SearchForm";
import "./Header.css";

function Header() {
	return (
		<div className='holder'>
			<header className='header'>
				<Navbar />
				<div className='header-content flex flex-c text-center text-white'>
					<h2 className='header-title text-capitalize'>
						Find your Book of Choice
					</h2>
					<br />
					<p className='header-text fs-18 fw-3'>
						Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Facere dolore incidunt,
						quibusdam error id minus quae iste! Quaerat quae
						cumque facere, reprehenderit illo quod. Deleniti
						repellat reprehenderit hic quia unde!
					</p>
					<SearchForm />
				</div>
			</header>
		</div>
	);
}

export default Header;
