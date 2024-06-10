export function move(element: HTMLDivElement): number {
	let top = +element.style.top.replace("px", "");
	const board = document.querySelector(".section__game");
	const boardHeight = board.getBoundingClientRect().height;
	const id = setInterval(() => {
		element.style.top = `${top+=20}px`;
		if (top > (boardHeight - element.getBoundingClientRect().height) - 15) clearInterval(id);
	}, 800)

	return id;
}