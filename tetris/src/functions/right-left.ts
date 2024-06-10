export function rightLeft(element: HTMLDivElement){
	let left = 235;
	const elemWidth = element.getBoundingClientRect().width;
	addEventListener("keydown", (target: KeyboardEvent) => {
		if (target.code === "ArrowLeft" && left >= 5) {
			element.style.left = `${left-=10}px`
		} else if (target.code === "ArrowRight" && left + elemWidth < 570) {
			element.style.left = `${left+=10}px`
		}
		console.log( left);
	})
}