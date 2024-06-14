import { position } from "../figures/figures";
import { activeShape } from "../main";

export function draw() {

	const rows: NodeListOf<HTMLTableRowElement> = document.querySelectorAll("tr");

	for(let i = position.column, a = 0; i < position.column + activeShape.length; i++, a++){
		for(let j = position.row, b = 0; j < position.row + activeShape[0].length; j++, b++){
			const cellsInner = rows[i].querySelectorAll("td");
			if (activeShape[a][b].cube === 1) cellsInner[j].classList.add("cube")
		}
	}

}

export function clear() {

	const rows: NodeListOf<HTMLTableRowElement> = document.querySelectorAll("tr");

	for(let i = position.column, a = 0; i < position.column + activeShape.length; i++, a++){
		for(let j = position.row, b = 0; j < position.row + activeShape[0].length; j++, b++){
			const cellsInner = rows[i].querySelectorAll("td");
			if (activeShape[a][b].cube === 1) {
				cellsInner[j].removeAttribute("class");
				cellsInner[j].classList.add("empty");
			}
		}
	}

}