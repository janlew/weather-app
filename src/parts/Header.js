import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<nav className="h-16 bg-gray-300 flex items-center shadow-lg">
			<div className="container mx-auto xl:px-8 md:px-6 sm:px-3 px-2">
				<Link to="/">
					<span className="font-serif text-gray-800 pb-1">Home</span>
				</Link>
			</div>
		</nav>
	);
};

export default Header;
