// import { Company } from "./Company";
// import { User } from "./User";

const mapEl = document.getElementById("map")!;

new google.maps.Map(mapEl, {
	zoom: 1,
	center: {
		lat: 0,
		lng: 0,
	},
});
