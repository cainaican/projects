export function move(element: HTMLDivElement): void {
	let top = 0;
	setInterval(() => {
		element.style.top = `${top+=15}px`;
	}, 800)
}