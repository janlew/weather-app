import React from "react";

const Loader = ({ size }) => {
	return (
		<div
			className={`
								animate-spin
								rounded-full
								h-${size}
								w-${size}
								border-t-2 border-b-2 border-purple-500
							`}
		></div>
	);
};

export default Loader;
