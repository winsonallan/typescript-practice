const drink = {
	color: "brown",
	carbonated: true,
	sugar: 40,
};

const pepsi: [string, boolean, number] = ["brown", true, 40];

// Error caught
// pepsi[0] = 40;
// pepsi[2] = "brown";

type Drink = [string, boolean, number];
const cola: Drink = ["brown", true, 40];

const carSpecs: [number, number] = [400, 3356];

// Objects are prefered though, compared to Tuples
const carStats: { horsepower: number; weight: number } = {
	horsepower: 400,
	weight: 3354,
};
