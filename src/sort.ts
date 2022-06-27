export abstract class Sort {
	abstract compare(Lindex: number, Rindex: number): boolean;
	abstract swap(Lindex: number, Rindex: number): void;
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
