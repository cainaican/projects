import { area } from "../figures/figures";

export function createTable() {
	const table = document.querySelector(".section__table");

	area.forEach((el) => {
		const tr = document.createElement("tr");
		el.forEach((elInner) => {
			const td = document.createElement("td");
			if (typeof elInner === "object" && elInner.cube === 1) {
				td.classList.add("cube");
				tr.appendChild(td);
				return;
			}
			td.classList.add("empty");
			tr.appendChild(td);
			return;
		})
		table.appendChild(tr)
	})
}