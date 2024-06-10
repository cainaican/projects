export function boost(element: HTMLDivElement, id: number): number {
	clearInterval(id);
	let top = +element.style.top.replace("px", "");
	const board = document.querySelector(".section__game");
	const boardHeight = board.getBoundingClientRect().height;

	const boostId = setInterval(() => {
		element.style.top = `${top+=20}px`;
		if (top > (boardHeight - element.getBoundingClientRect().height - 15)) clearInterval(boostId);

	}, 100);

	return boostId;

}