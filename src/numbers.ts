import { Sort } from "./sort";

export class Numbers extends Sort {
	constructor(public numbers: number[]) {
		super();
	}

	compare(Lindex: number, Rindex: number): boolean {
		return this.numbers[Lindex] > this.numbers[Rindex];
	}

	swap(Lindex: number, Rindex: number): void {
		let temp = this.numbers[Lindex];
		this.numbers[Lindex] = this.numbers[Rindex];
		this.numbers[Rindex] = temp;
	}

	get length(): number {
		return this.numbers.length;
	}
}
