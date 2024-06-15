import { position } from "../figures/figures";
import { activeShape } from "../main";

export function draw() {

	const rows: NodeListOf<HTMLTableRowElement> = document.querySelectorAll("tr");

	for(let i = position.row, a = 0; i < position.row + activeShape.length; i++, a++){
		for(let j = position.column, b = 0; j < position.column + activeShape[0].length; j++, b++){
			if(i + 1 >= 43) continue;

			const cellsInner = rows[i].querySelectorAll("td");
			if (activeShape[a][b].cube === 1) cellsInner[j].classList.add("cube")
		}
	}

}

export function clear() {

	const rows: NodeListOf<HTMLTableRowElement> = document.querySelectorAll("tr");

	for(let i = position.row, a = 0; i < position.row + activeShape.length; i++, a++){
		for(let j = position.column, b = 0; j < position.column + activeShape[0].length; j++, b++){
			if(i + 1 >= 43) continue;

			const cellsInner = rows[i].querySelectorAll("td");
			if (activeShape[a][b].cube === 1) {
				cellsInner[j].removeAttribute("class");
				cellsInner[j].classList.add("empty");
			}
		}
	}

}