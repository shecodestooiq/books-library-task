import React from "react";
import Styles from "./Home.module.css";

import Header from "../../components/header/Header";
import { Outlet } from "react-router-dom";

function Home() {
	return (
		<main>
			<Header />
			<Outlet />
		</main>
	);
}

export default Home;
