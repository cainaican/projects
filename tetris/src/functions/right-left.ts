export function rightLeft(element: HTMLDivElement){
	let left = 235;
	const elemWidth = element.getBoundingClientRect().width;
	addEventListener("keydown", (target: KeyboardEvent) => {
		
		if (target.code === "ArrowLeft" && left > 10) {
			element.style.left = `${left-=15}px`
		} else if (target.code === "ArrowRight" && left + elemWidth < 565) {
			element.style.left = `${left+=15}px`
		}
		console.log( elemWidth);
		console.log( left);
	})
}