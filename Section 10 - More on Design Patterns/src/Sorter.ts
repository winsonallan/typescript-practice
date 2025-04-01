export abstract class Sorter {
	abstract compare(leftIndex: number, rightIndex: number): boolean;
	abstract swap(leftIndex: number, rightIndex: number): void;
	abstract length: number;

	sort(): void {
		const { length } = this;

		for (let i = 0; i < length; i++) {
			for (let j = 0; j < length - i - 1; j++) {
				if (this.compare(j, j + 1)) {
					this.swap(j, j + 1);
				}
			}
		}
	}
}

// Abstract is like a 'promise'. In the example above, we basically promised 'TypeScript' that the child classes of Sorter will have the functions compare(), swap(), and length variable, that accepts their own respective parameters (if any) and have their own returns (if any).
