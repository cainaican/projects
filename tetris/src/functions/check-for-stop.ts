import { area, position } from "../figures/figures";
import { activeShape } from "../main";

export function checkForStop() {

	const lastIndex = activeShape
		.map(el => [...el.map(elInner => elInner.cube)])
		.map((item) => item.includes(1))
		.lastIndexOf(true);


	return position.column + lastIndex >= area.length - 1;

}