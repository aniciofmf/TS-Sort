import { Sort } from "./sort";

export class Characters extends Sort {
	constructor(public characters: string) {
		super();
	}

	compare(Lindex: number, Rindex: number): boolean {
		return this.characters[Lindex].toLowerCase() > this.characters[Rindex].toLowerCase();
	}

	swap(Lindex: number, Rindex: number): void {
		const chars: string[] = this.characters.split("");

		let elem = chars[Lindex];
		chars[Lindex] = chars[Rindex];
		chars[Rindex] = elem;

		this.characters = chars.join("");
	}

	get length(): number {
		return this.characters.length;
	}
}
