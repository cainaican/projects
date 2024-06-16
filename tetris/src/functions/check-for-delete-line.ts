import { area } from "../main";

export function checkForDeleteLine(): number[] {
	let deletingLinesArray: number[] = [];

	area.forEach((el, idx) => {
		if (el.every(elInner => elInner.block === "stay")) deletingLinesArray.push(idx);
	})

	return deletingLinesArray;
}