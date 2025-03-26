const oldCivic = {
	name: "civic",
	year: 2000,
	broken: true,
};

const printVehicle = (vehicle: {
	name: string;
	year: number;
	broken: boolean;
}): void => {
	console.log(`Name: ${vehicle.name}`);
	console.log(`Year: ${vehicle.year}`);
	console.log(`Broken? ${vehicle.broken}`);
};

printVehicle(oldCivic);
// The above code is too long, we can fix it using interfaces

const oldCivic2 = {
	name: "civic",
	year: 2000,
	broken: true,
	summary(): string {
		return `Name: ${this.name}, Year: ${this.year}, broken: ${this.broken === true ? "YES" : "NO"}`;
	},
};

interface Vehicle {
	name: string;
	year: number;
	broken: boolean;
	summary(): string;
}

const printVehicleFix = (vehicle: Vehicle): void => {
	console.log(`${vehicle.summary}`);
};

printVehicleFix(oldCivic2);

interface Reportable {
	summary(): string;
}

const printSummary = (item: Reportable): void => {
	console.log(`${item.summary}`);
};
// This works as TS only checks whether there's the summary property inside the oldCivic2 object.
printSummary(oldCivic2);

const drink = {
	color: "brown",
	carbonated: true,
	sugar: 40,
	summary(): string {
		return `My drink has ${this.sugar} grams of sugar.`;
	},
};

printSummary(drink);
