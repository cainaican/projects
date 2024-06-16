import { area } from "../main";

export function checkForDeleteLine() {
	let shouldDeleteLine = false;

	area.forEach((el) => {
		if (el.every(elInner => elInner.block === "stay")) shouldDeleteLine = true;
	})

	return shouldDeleteLine;
}