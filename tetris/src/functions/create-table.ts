import { area } from "../main";

export function createTable() {
	const table = document.querySelector(".section__table");

	area.forEach((el, idx) => {
		const tr = document.createElement("tr");
		el.forEach((elInner, idxInner) => {
			const td = document.createElement("td");
			td.id = `${idx}.${idxInner}`;
			td.classList.add("empty");
			tr.appendChild(td);
			return;
		})
		table.appendChild(tr)
	})
}

export function updateTable() {
	// const table = document.querySelector(".section__table");
	// let trs = document.querySelectorAll("tr");
	// table.prepend(trs[0]);
	// trs[trs.length-1].remove();

	area.forEach((el, idx) => {
		el.forEach((elInner, idxInner) => {
			const td = document.getElementById(`${idx}.${idxInner}`);
			td.removeAttribute("class");
			td.classList.add("empty");
			if(typeof elInner === 'object') {
				td.classList.add(elInner.color);
			}

		})
	})
}