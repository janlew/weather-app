import clearSkyConfig from "./weatherConfigs/clearSkyConfig";

function importAll(r) {
	let images = {};
	r.keys().map((item) => {
		images[item.replace("./", "")] = r(item);
	});
	return images;
}

const images = importAll(
	require.context("../assets/backgrounds", false, /\.(png|jpe?g|svg)$/)
);
