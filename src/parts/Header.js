import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<nav className="h-16 bg-gray-400 flex items-center shadow-lg">
			<div className="container mx-auto px-4">
				<Link to="/">
					<span className="text-white">Home</span>
				</Link>
			</div>
		</nav>
	);
};

export default Header;
