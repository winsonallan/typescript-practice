class Vehicle {
	drive(): void {
		console.log("chugga chugga");
	}

	honk(): void {
		console.log("beep");
	}
}

const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();

// Inheritance
class Car extends Vehicle {
	drive(): void {
		console.log("vroom");
	}
}
const car = new Car();
car.drive();
car.honk();

// Instance Method Modifiers
// public => can be called any time
// private => can only be called by other methods in this class
// protected => can be called by other methods in this class or by its child classes

class Vehicle2 {
	color: string;
	
	constructor (color: string) {
		this.color = color
	}

	protected honk(): void {
		console.log("beep");
	}
}

// OR
// class Vehicle2 {
// 	constructor (public color: string) {
// 		this.color = color
// 	}

// 	protected honk(): void {
// 		console.log("beep");
// 	}
// }

const vehicle2 = new Vehicle2('orange');
console.log(vehicle2.color);

// Inheritance
class Car2 extends Vehicle2 {
	constructor (public wheels: number, color: string) {
		super(color);
	}

	private drive(): void {
		console.log("vroom");
	}

	startDrivingProcess(): void {
		this.drive();
		this.honk(); //If honk in Vehicle2 is private, there's error. If protected, no error
	}
}
const car2 = new Car2(4, 'blue');
// car2.drive(); //Error
car2.startDrivingProcess();

// By using interfaces & classes together, we get really strong code reuse in TS