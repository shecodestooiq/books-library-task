import React from "react";

import LoaderGIF from "../../assets/image/Loader.gif";
import "./Loader.css";

function Loader() {
	return (
		<div className='loader flex flex-c'>
			<img
				src={LoaderGIF}
				alt='Loader'
			/>
		</div>
	);
}

export default Loader;
