import { area } from "../figures/figures"
import { calculateTable, createTable } from "./createTable";

export function moveFigure(): void {

	const trs = document.querySelectorAll("tr");
	
	const id = setInterval(() => {
		const reversedArray = area.slice().reverse();
		const cubesOnLines: number[] = [];

		reversedArray.forEach((el, index) => {

			if (index === reversedArray.length) return;

			const finded = el.find((elInner) => typeof elInner === "object" && elInner.block === "active");

			if (finded) cubesOnLines.push(reversedArray.length - 1 - index);

		})
		for(let i of cubesOnLines) {
			for(let j = 0; j < area[0].length; j++){

				if (typeof area[i][j] === "object" && area[i][j].block === "active") {

					if (i === area.length - 1) {
						clearInterval(id);
						return;
					}

					if (typeof area[i+1][j] === "object" && area[i+1][j].block === "stay") {
						clearInterval(id);
						return;
					}

					area[i+1][j] = area[i][j];
				}

				if(cubesOnLines[cubesOnLines.length - 1] === i ) {
					if (typeof area[i][j] === "object" && area[i][j].block === "active") {
						area[i][j] = 0;
					}
				}
			}
		}

		calculateTable(trs);

	}, 100)

}