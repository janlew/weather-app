// import React from "react";

// function importAll(r) {
// 	let images = {};
// 	r.keys().map((item) => {
// 		images[item.replace("./", "")] = r(item);
// 	});
// 	return images;
// }

// const images = importAll(
// 	require.context("../assets/backgrounds", false, /\.(png|jpe?g|svg)$/)
// );

// const Background = () => {
// 	return (
// 		<div
// 			className="absolute bottom-0 left-0 top-0 right-0"
// 			style={{
// 				backgroundImage: `url(${images["clear_sky.jpg"].default})`,
// 				backgroundSize: "cover",
// 			}}
// 		></div>
// 	);
// };

// export default Background;
